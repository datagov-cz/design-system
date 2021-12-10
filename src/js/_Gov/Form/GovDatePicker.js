/*!
 * GovDatePicker
 * Copyright(c) 2020 Ministerstvo vnitra České republiky
 * Copyright(c) 2020 Zdeněk Vítek
 * MIT Licensed
 *
 * Version 1.0.0
 */

'use strict';

import GovCalendar from '../Calendar/GovCalendar';
import {padStart} from '../utils/string';
import {matchCzechDate} from '../utils/date';
import {addClass, hasClass} from '../../utils/classie';
import classes from '../_extends/lib/classes';
import GovComponent from '../_extends/GovComponent';
import GovElement from '../_extends/GovElement';
import GovFormControl from '../_extends/GovFormControl';
import GovControl from '../_extends/GovControl';

const locales = {
    cs: {
        errorFormatMessage: 'Zadejte datum ve formátu DD. MM. YYYY',
        errorMessage:       'Zadejte datum',
    },
    en: {
        errorFormatMessage: 'Enter the date in DD. MM. YYYY format',
        errorMessage:       'Enter the date',
    },
}

class GovDatePicker extends classes(GovElement, GovControl, GovComponent, GovFormControl) {
    /**
     * @param {Element} el
     * @param {Object} options
     */
    constructor(el, options = {}) {
        super();
        this._defaults = {
            locale:  'cs',
            format:  'DD. MM. YYYY',
            classes: {
                inputContainer:    'gov-datepicker',
                calendarContainer: 'gov-calendar',
            }
        }
        this._prepareOptions(options);
        this._prepareDomElement(el);
        this._setLocales(locales);
        this._prepareTempData();
        this._calendarInstance = null;
        this._currentValue = null;
        this._init();
    }

    /**
     * @return {void}
     * @private
     */
    _init() {
        this._registerClickOutside(this);
        this._bindEvents();
        this._prepareDefaultValue();
    }

    /**
     * @return {void}
     * @private
     */
    _bindEvents() {
        this._domElement().addEventListener('click', (e) => {
            this._iniCalendar();
            this._bindClickOutside();
            e.target.focus();
        });
        this._domElement().addEventListener('focus', (e) => {
            this._iniCalendar();
            this._bindClickOutside();
            e.target.focus();
        });
        this._domElement().addEventListener('blur', () => {
            this._validateInput();
        });
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
        const parentEl = this._domElement().parentElement.parentElement;

        for (const key in replaceTable) {
            if (replaceTable.hasOwnProperty(key)) {
                const re = new RegExp(key, 'g');
                format = format.replace(re, replaceTable[key]);
            }
        }
        this._domElement().value = format;

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
        this._calendarContainerElement.remove();
        this._inputContainerElement.unwrap();
        this._calendarInstance = null;
    }

    /**
     * @return {void}
     * @private
     */
    _prepareDefaultValue() {
        const {format} = this._options;
        let {value} = this._domElement();
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
     * @return {Boolean}
     * @private
     */
    _validateInput() {
        const value = this._domElement().value;
        this._clearError();

        if (value) {
            if (!matchCzechDate(value)) {
                this._setError(this._locale().errorFormatMessage);
                return true;
            }
        } else {
            if (this._domElement().hasAttribute('required')) {
                this._setError(this._locale().errorMessage);
                return true;
            }
            return false;
        }
    }

    /**
     * @return {HTMLElement|Element}
     * @private
     */
    get _inputContainerElement() {
        const inputContainer = this._domElement().parents('.' + this._options.classes.inputContainer);
        if (inputContainer.length) return inputContainer[0];
        else {
            const inputContainer = document.createElement('div');
            inputContainer.classList.add(this._options.classes.inputContainer);

            let labelElement = null;
            const sibling = this._domElement().nextElementSibling;
            if (sibling && sibling.tagName === 'LABEL') {
                labelElement = sibling;
            }

            this._domElement().wrap(inputContainer);
            if (labelElement) inputContainer.append(labelElement);

            return inputContainer;
        }
    }

    /**
     * @return {HTMLElement|Element}
     * @private
     */
    get _calendarContainerElement() {
        const calendarContainer = this._inputContainerElement.querySelector(`.${this._options.classes.calendarContainer}`);
        if (calendarContainer) return calendarContainer;
        else {
            const calendarContainer = document.createElement('div');
            calendarContainer.classList.add(this._options.classes.calendarContainer);
            this._inputContainerElement.append(calendarContainer);

            return calendarContainer;
        }
    }

    /**
     * @return {Element|HTMLElement}
     * @private
     */
    _outsideElement() {
        return this._domElement();
    }
}

window.GovDatePicker = GovDatePicker;
export default GovDatePicker;
