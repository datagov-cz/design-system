/*!
 * GovTimePicker
 * Copyright(c) 2021 Ministerstvo vnitra České republiky
 * Copyright(c) 2021 Zdeněk Vítek
 * MIT Licensed
 *
 * Version 1.0.0
 */

'use strict';

import map from 'lodash/map';
import {addClass} from '../../utils/classie';
import classes from '../_extends/lib/classes';
import GovComponent from '../_extends/GovComponent';
import GovElement from '../_extends/GovElement';
import GovFormControl from '../_extends/GovFormControl';
import {matchTime} from '../utils/time';
import GovControl from '../_extends/GovControl';


const locales = {
    cs: {
        errorFormatMessage: 'Zadejte čas ve formátu HH:MM',
        errorMessage:       'Zadejte čas',
    },
    en: {
        errorFormatMessage: 'Enter the time in HH:MM format',
        errorMessage:       'Enter the time',
    },
}

class GovTimePicker extends classes(GovElement, GovControl, GovComponent, GovFormControl) {
    /**
     * @param {Element} el
     * @param {Object} options
     */
    constructor(el, options = {}) {
        super();
        this._defaults = {
            interval: 15,
            classes:  {
                timepickerContainer:    'gov-timepicker',
                timepickerOptions:      'gov-timepicker__options',
                timepickerOption:       'gov-timepicker__option',
            }
        }
        this._prepareOptions(options);
        this._prepareDomElement(el);
        this._setLocales(locales);
        this._prepareTempData();
        this._arrowCounter = -1;
        this._init();
    }

    /**
     * @return {void}
     * @private
     */
    _init() {
        this._registerClickOutside(this);
        this._prepareStructure();
        this._bindEvents();
    }

    /**
     * @return {void}
     * @private
     */
    _bindEvents() {
        this._domElement().addEventListener('focus', () => {
            return;
            this._showListOffer();
            this._bindClickOutside();
        });
        this._domElement().addEventListener('blur', () => {
            this._validateInput();
            return;
            setTimeout(() => {
                this._hideListOffer();
                this._validateInput();
            }, 200);
        });
        this._domElement().addEventListener('keyup', (e) => {
            e = e || window.event;
            e.preventDefault();
            if (e.keyCode === 38) this._onArrowUp();
            else if (e.keyCode === 40) this._onArrowDown();
            else if (e.keyCode === 13) this._onEnter();
            else if (e.keyCode === 27) this._pick(null);
        });
    }

    /**
     * @return {void}
     * @private
     */
    _prepareTimes() {
        const {classes: {timepickerOption}} = this._options;
        this._data = this._generateTimes();
        map(this._data, (item) => {
            const li = document.createElement('li');
            li.classList.add(timepickerOption);
            li.setAttribute('role', 'option');
            li.innerHTML = item;

            li.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this._pick(item);
            });
            this._inputListElement.append(li);
        });
    }

    /**
     * @return {Array<string>}
     * @private
     */
    _generateTimes() {
        let x = this._options.interval;
        let times = [];
        let tt = 0;

        for (let i = 0; tt < 24 * 60; i++) {
            let hh = Math.floor(tt / 60);
            let mm = (tt % 60);
            times[i] = ("0" + (hh)).slice(-2) + ':' + ("0" + mm).slice(-2);
            tt = tt + x;
        }

        return times;
    }

    /**
     * @return {Boolean}
     * @private
     */
    _validateInput() {
        const value = this._domElement().value;
        this._clearError();
        if (value) {
            if (!matchTime(value)) {
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

    // ACTION

    /**
     * @param {Object|null} item
     * @return {void}
     * @private
     */
    _pick(item) {
        if (item) {
            this._domElement().value = item;
            addClass(this._formControlElement(), 'not-empty');
        }
        this._hideListOffer();
        document.removeEventListener('click', this._clickOutside);
    }

    // EVENTS

    /**
     * @return {void}
     * @private
     */
    _destroy() {
        this._pick(null);
    }

    /**
     * @return {void}
     * @private
     */
    _onArrowDown() {
        if (this._isListVisible()) {
            if (this._arrowCounter < this._data.length) {
                this._arrowCounter = this._arrowCounter + 1;
                this._setSelectedOption();
            }
        }
    }

    /**
     * @return {void}
     * @private
     */
    _onArrowUp() {
        if (this._isListVisible()) {
            if (this._arrowCounter > 0) {
                this._arrowCounter = this._arrowCounter - 1;
                this._setSelectedOption();
            }
        }
    }

    /**
     * @return {void}
     * @private
     */
    _onEnter() {
        if (this._data.hasOwnProperty(this._arrowCounter)) {
            const item = this._data[this._arrowCounter];
            this._pick(item);
        }
    }

    // STRUCTURE

    /**
     * @return {void}
     * @private
     */
    _prepareStructure() {
        const {classes: {timepickerContainer, timepickerOptions}} = this._options;
        this._domElement().setAttribute('aria-controls', 'time-' + this._id);

        const container = document.createElement('div');
        container.classList.add(timepickerContainer);
        container.setAttribute('role', 'combobox');
        container.setAttribute('aria-haspopup', 'listbox');
        container.setAttribute('aria-owns', 'time-' + this._id);
        container.setAttribute('aria-expanded', '0');

        const list = document.createElement('ul');
        list.setAttribute('id', 'time-' + this._id);
        list.setAttribute('role', 'listbox');
        list.classList.add(timepickerOptions);
        list.style.display = 'none';

        let labelElement = null;
        const sibling = this._domElement().nextElementSibling;
        if (sibling && sibling.tagName === 'LABEL') {
            labelElement = sibling;
        }

        this._domElement().setAttribute('autocomplete', 'off');
        this._domElement().wrap(container);
        if (labelElement) this._inputContainerElement.append(labelElement);
        this._inputContainerElement.append(list);

        this._prepareTimes();
    }

    // HELPERS

    /**
     * @return {void}
     * @private
     */
    _setSelectedOption() {
        const options = this._inputListElement.querySelectorAll('li'),
              optionsEl = this._inputListElement;

        map(options, (option, index) => {
            option.classList.remove('selected');
            option.setAttribute('aria-selected', '0');
            if (index === this._arrowCounter) {
                option.classList.add('selected');
                option.setAttribute('aria-selected', '1');
                optionsEl.scrollTop = option.offsetTop;
            }
        })
    }

    /**
     * @return {void}
     * @private
     */
    _hideListOffer() {
        this._inputListElement.style.display = 'none';
        this._inputContainerElement.setAttribute('aria-expanded', '0');
    }

    /**
     * @return {void}
     * @private
     */
    _showListOffer() {
        this._inputListElement.style.display = 'block';
        this._inputContainerElement.setAttribute('aria-expanded', '1');
    }

    /**
     * @return {boolean}
     * @private
     */
    _isListVisible() {
        return this._inputListElement.style.display === 'block';
    }

    // CALLABLE

    /**
     * @return {void}
     */
    clear() {
        this._domElement().value = '';
        this._domElement().focus();
    }

    // ELEMENTS

    /**
     * @return {Element|HTMLElement|null}
     * @private
     */
    get _inputContainerElement() {
        const {classes: {timepickerContainer}} = this._options;
        const inputContainer = this._domElement().parents('.' + timepickerContainer);
        return inputContainer.length ? inputContainer[0] : null;
    }

    /**
     * @return {HTMLElement|null}
     * @private
     */
    get _inputListElement() {
        return this._inputContainerElement.querySelector('ul');
    }

    /**
     * @return {Element|HTMLElement}
     * @private
     */
    _outsideElement() {
        return this._domElement();
    }
}

window.GovTimePicker = GovTimePicker;
export default GovTimePicker;
