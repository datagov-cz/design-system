/*!
 * GovTable
 * Copyright(c) 2020 Ministerstvo vnitra České republiky
 * Copyright(c) 2020 Zdeněk Vítek
 * MIT Licensed
 *
 * Version 1.0.0
 */

'use strict';

import {addClass, removeClass} from '../../utils/classie';
import '../../utils/dom';
import GovElement from '../mixins/GovElement';

class GovTable extends GovElement {
    constructor(el) {
        super(el);
        this._init();
    }

    /**
     * @return {void}
     * @private
     */
    _init() {
        this._prepareStructure();
    }

    /**
     * @return {void}
     * @private
     */
    _prepareStructure() {
        const wrapperElement = document.createElement('div');
        this._containerElement.parentNode.appendChild(wrapperElement);
        wrapperElement.appendChild(this._containerElement);

        if (wrapperElement.scrollWidth < this._containerElement.scrollWidth) {
            addClass(wrapperElement, 'gov-scrollable');
            this._bindEvents(wrapperElement);
        } else {
            wrapperElement.parentNode.appendChild(this._containerElement);
            wrapperElement.remove();
        }
    }

    /**
     * @return {void}
     * @private
     */
    _bindEvents(wrapperElement) {
        this._containerElement.addEventListener('scroll', (e) => {
            e.preventDefault();
            if (this._containerElement.scrollWidth === wrapperElement.scrollWidth + this._containerElement.scrollLeft) {
                addClass(wrapperElement, 'scrolled');
            } else {
                removeClass(wrapperElement, 'scrolled');
            }
        })
    }
}

window.GovTable = GovTable;
export default GovTable;
