/*!
 * GovDatePicker
 * Copyright(c) 2020 Ministerstvo vnitra České republiky
 * Copyright(c) 2020 Zdeněk Vítek
 * MIT Licensed
 *
 * Version 1.0.0
 */

'use strict';

import merge from 'lodash/merge';
import GovCalendar from './GovCalendar';
import GovElement from '../mixins/GovElement';
import {padStart} from '../utils/string';
import {matchCzechDate} from '../utils/date';
import {addClass, hasClass, removeClass} from '../../utils/classie';


const locales = {
    cs: {
        errorFormatMessage: 'Zadejte datum ve formátu DD. MM. YYYY',
        errorMessage: 'Zadejte datum',
    },
    en: {
        errorFormatMessage: 'Enter the date in DD. MM. YYYY format',
        errorMessage: 'Enter the date',
    },
}

class GovDatePicker extends GovElement {
    /**
     * @param {Element} el
     * @param {Object} options
     */
    constructor(el, options = {}) {
        super(el);
        this._defaults = {
            locale:  'cs',
            format:  'DD. MM. YYYY',
            classes: {
                inputContainer:    'gov-datepicker',
                calendarContainer: 'gov-calendar',
                errorContainer:    'gov-form-control--error',
            }
        }
        this._options = merge({}, this._defaults, options);
        this._clickOutside = this._detectClickOutside.bind(this);
        this._clickEscape = this._detectClickEscape.bind(this);
        this._calendarInstance = null;
        this._currentValue = null;
        this._tempControlMessage = null;
        this._init();
    }

    /**
     * @return {void}
     * @private
     */
    _init() {
        this._bindEvents();
        this._prepareDefaultValue();
        this._prepareTempData();
    }

    /**
     * @return {void}
     * @private
     */
    _bindEvents() {
        this._containerElement.addEventListener('click', (e) => {
            this._iniCalendar();
            this._bindClickOutside();
            e.target.focus();
        });
        this._containerElement.addEventListener('focus', (e) => {
            this._iniCalendar();
            this._bindClickOutside();
            e.target.focus();
        });
        this._containerElement.addEventListener('blur', (e) => {
            this._validateInput();
        });
    }

    /**
     * @return {void}
     * @private
     */
    _bindClickOutside() {
        setTimeout(() => {
            document.addEventListener('click', this._clickOutside);
            document.addEventListener('keyup', this._clickEscape);
        }, 100);
    }

    /**
     * @return {void}
     * @private
     */
    _iniCalendar() {
        const options = {
            locale:   this._options.locale,
            selected: this._currentValue,
            events:   {
                onDateSelect: this._onDateSelect.bind(this)
            }
        }
        this._calendarInstance = new GovCalendar(this._calendarContainerElement, options);
    }

    /**
     * @return {void}
     * @private
     */
    _onDateSelect(date) {
        let {format} = this._options;
        const month = (date.getMonth() + 1).toString();
        const day = date.getDate().toString();
        const replaceTable = {
            'DD':   padStart(day),
            'D':    day,
            'MM':   padStart(month),
            'M':    month,
            'YYYY': date.getFullYear(),
        }
        const parentEl = this._containerElement.parentElement.parentElement;

        for (const key in replaceTable) {
            if (replaceTable.hasOwnProperty(key)) {
                const re = new RegExp(key, 'g');
                format = format.replace(re, replaceTable[key]);
            }
        }
        this._containerElement.value = format;

        this._validateInput();

        if (hasClass(parentEl, 'gov-form-control__datepicker')) {
            addClass(parentEl, 'not-empty');
        }

        this._destroy();
    }

    /**
     * @return {void}
     * @private
     */
    _destroy() {
        document.removeEventListener('click', this._clickOutside);
        document.removeEventListener('keyup', this._clickEscape);
        this._calendarContainerElement.remove();
        this._inputContainerElement.unwrap();
        this._calendarInstance = null;
    }

    /**
     * @param {MouseEvent} evt
     * @return {void}
     * @private
     */
    _detectClickOutside(evt) {
        const {classes: {inputContainer}} = this._options;
        const parents = this._containerElement.parents('.' + inputContainer);
        if (parents.length === 0) this._destroy();
        const flyoutElement = parents[0];
        let targetElement = evt.target;
        do {
            if (targetElement == flyoutElement) {
                return;
            }
            targetElement = targetElement.parentNode;
        } while (targetElement);

        this._destroy();
    }

    /**
     * @param {KeyboardEvent} evt
     * @private
     */
    _detectClickEscape(evt) {
        if (evt.key === "Escape") {
            this._destroy();
        }
    }

    /**
     * @return {void}
     * @private
     */
    _prepareDefaultValue() {
        const {format} = this._options;
        let {value} = this._containerElement;
        if (String(value).length === 0) return;

        const formatBlocks = {
            day:   ['DD', 'D'],
            month: ['MM', 'M'],
            year:  ['YYYY'],
        };

        const getPartFromString = (blocks) => {
            for (let i = 0; i < blocks.length; i++) {
                const dateKey = blocks[i];
                const index = format.indexOf(dateKey);
                const length = dateKey.length;
                if (format.indexOf(dateKey) !== -1) {
                    return value.substring(index, index + length);
                }
            }
            return null;
        }

        const day = getPartFromString(formatBlocks.day);
        const month = getPartFromString(formatBlocks.month);
        const year = getPartFromString(formatBlocks.year);

        if (day && month && year) {
            this._currentValue = `${year}-${month}-${day}`;
        }
    }

    /**
     * @return {void}
     * @private
     */
    _prepareTempData() {
        if (this._formMessageElement) {
            this._tempControlMessage = this._formMessageElement.textContent;
        }
    }

    /**
     * @return {Boolean}
     * @private
     */
    _validateInput() {
        const value = this._containerElement.value;
        const {errorContainer} = this._options.classes;
        if (hasClass(this._formControlElement, errorContainer)) {
            removeClass(this._formControlElement, errorContainer);
            if (this._tempControlMessage) {
                this._formMessageElement.textContent = this._tempControlMessage;
            }
        }

        if (value) {
            if (!matchCzechDate(value)) {
                addClass(this._formControlElement, errorContainer);
                this._formMessageElement.textContent = this._locales.errorFormatMessage;
                return true;
            }
        } else {
            if(this._containerElement.hasAttribute('required')) {
                addClass(this._formControlElement, errorContainer);
                this._formMessageElement.textContent = this._locales.errorMessage;
                return true;
            }
            return false;
        }
    }

    /**
     * @return {Object}
     * @private
     */
    get _locales() {
        const {locale} = this._options;
        return locales.hasOwnProperty(locale) ? locales[locale] : locales['cs'];
    }


    /**
     * @return {HTMLElement|Element}
     * @private
     */
    get _inputContainerElement() {
        const inputContainer = this._containerElement.parents('.' + this._options.classes.inputContainer);
        if (inputContainer.length) return inputContainer[0];
        else {
            const inputContainer = document.createElement('div');
            inputContainer.classList.add(this._options.classes.inputContainer);

            let labelElement = null;
            const sibling = this._containerElement.nextElementSibling;
            if (sibling && sibling.tagName === 'LABEL') {
                labelElement = sibling;
            }

            this._containerElement.wrap(inputContainer);
            if (labelElement) inputContainer.append(labelElement);

            return inputContainer;
        }
    }

    /**
     * @return {HTMLElement|Element}
     * @private
     */
    get _calendarContainerElement() {
        const calendarContainer = this._inputContainerElement.querySelector('.' + this._options.classes.calendarContainer);
        if (calendarContainer) return calendarContainer;
        else {
            const calendarContainer = document.createElement('div');
            calendarContainer.classList.add(this._options.classes.calendarContainer);
            this._inputContainerElement.append(calendarContainer);

            return calendarContainer;
        }
    }

    /**
     * @return {HTMLElement|Element|null}
     * @private
     */
    get _formControlElement() {
        const parents = this._containerElement.parents('.gov-form-control');
        if (parents.length) {
            return parents[0];
        } else {
            return null;
        }
    }

    /**
     * @return {HTMLElement|Element|null}
     * @private
     */
    get _formMessageElement() {
        if (this._formControlElement) {
            return this._formControlElement.querySelector('.gov-form-control__message');
        } else {
            return null;
        }
    }
}

window.GovDatePicker = GovDatePicker;
export default GovDatePicker;
