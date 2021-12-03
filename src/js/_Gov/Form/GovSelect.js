/*!
 * GovSelect
 * Copyright(c) 2020 Ministerstvo vnitra České republiky
 * Copyright(c) 2020 Zdeněk Vítek
 * MIT Licensed
 *
 * Version 1.0.0
 */

'use strict';

import merge from 'lodash/merge';
import { addClass } from '../../utils/classie';
import GovElement from '../mixins/GovElement';

class GovSelect extends GovElement {
    /**
     * @param {Element} el
     * @param {Object} options
     */
    constructor(el, options = {}) {
        super(el);

        this._defaults = {
            selectSelector:  'select',
        }

        this._options = merge({}, this._defaults, options);
        this._init();
    }

    /**
     * @return {void}
     * @private
     */
    _init() {
        this._suppressDefault();
        this._bindEvents();
    }

    /**
     * @return {void}
     * @private
     */
    _suppressDefault() {
        this._selectElement.selectedIndex = -1;
    }

    /**
     * @return {void}
     * @private
     */
     _bindEvents() {
        this._selectElement.addEventListener('change', () => {
            if (this._selectElement && this._selectElement.selectedIndex > -1) {
                addClass(this._containerElement.parentElement, 'not-empty');
            }
        });
    }

    /**
     * @return {Element|null}
     * @private
     */
    get _selectElement() {
        const {selectSelector} = this._options;
        return this._containerElement.querySelector(selectSelector);
    }
}

window.GovSelect = GovSelect;
export default GovSelect;
