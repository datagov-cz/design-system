/*!
 * GovSelect
 * Copyright(c) 2020 Ministerstvo vnitra České republiky
 * Copyright(c) 2020 Zdeněk Vítek
 * MIT Licensed
 *
 * Version 1.0.0
 */

'use strict';

import classes from '../_extends/lib/classes';
import {addClass, removeClass} from '../../utils/classie';
import GovComponent from '../_extends/GovComponent';
import GovElement from '../_extends/GovElement';
import GovFormControl from '../_extends/GovFormControl';

class GovSelect extends classes(GovElement, GovComponent, GovFormControl) {
    /**
     * @param {Element} el
     * @param {Object} options
     */
    constructor(el) {
        super();
        this._prepareDomElement(el);
        this._init();
    }

    /**
     * @return {void}
     * @private
     */
    _init() {
        this._prepareSelect();
        this._bindEvents();
    }

    /**
     * @return {void}
     * @private
     */
    _prepareSelect() {
        const option = this._getFirstOptionElement();
        if (option) {
            if (String(option.textContent).length) {
                addClass(this._formControlElement(), 'not-empty');
            }
        }
    }

    /**
     * @return {void}
     * @private
     */
    _bindEvents() {
        this._domElement().addEventListener('change', () => {
            this._verifyEmptySelect();
        });
        this._domElement().addEventListener('focus', () => {
            this._verifyEmptySelect();
        });
        this._domElement().addEventListener('blue', () => {
            this._verifyEmptySelect();
        });
    }

    /**
     * @return {null|Element}
     * @private
     */
    _getFirstOptionElement() {
        const options = this._domElement().querySelectorAll('option:first-of-type');
        if (options.length) {
            const option = options[0];
            return option;
        }
        return null;
    }

    /**
     * @return {void}
     * @private
     */
    _verifyEmptySelect() {
        const value = this._domElement().value;
        if (value) {
            addClass(this._formControlElement(), 'not-empty');
        } else {
            removeClass(this._formControlElement(), 'not-empty');
        }
    }
}

window.GovSelect = GovSelect;
export default GovSelect;
