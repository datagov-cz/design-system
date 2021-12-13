/*!
 * GovSideNav
 * Copyright(c) 2021 Ministerstvo vnitra České republiky
 * Copyright(c) 2021 Zdeněk Vítek
 * MIT Licensed
 *
 * Version 1.0.0
 */

'use strict';

import classes from '../_extends/lib/classes';
import GovElement from '../_extends/GovElement';
import GovComponent from '../_extends/GovComponent';
import {removeClass} from '../utils/classie';

class GovSideNav extends classes(GovElement, GovComponent) {
    /**
     * @param {Element} el
     * @param {Object} options
     */
    constructor(el, options = {}) {
        super();
        this._defaults = {
            hiddenListSelector: '.gov-sidenav__items--hidden',
        }

        this._prepareOptions(options);
        this._prepareDomElement(el);
        this._init();
    }

    /**
     * @return {void}
     * @private
     */
    _init() {
        if (this._hiddenListElements.length) {
            this._registerListeners();
        }
    }

    /**
     * @return {void}
     * @private
     */
    _registerListeners() {
        this._hiddenListElements.forEach((listElement) => {
            const controlButton = listElement.nextElementSibling;
            if (controlButton && controlButton.tagName === 'BUTTON') {
                controlButton.addEventListener('click', () => {
                    this._toggleHiddenList(controlButton, listElement);
                })
            }
        });
    }

    /**
     * @param {HTMLButtonElement} controlButton
     * @param {HTMLUListElement} listElement
     * @return {void}
     * @private
     */
    _toggleHiddenList(controlButton, listElement) {
        const {hiddenListSelector} = this._options;
        removeClass(listElement, hiddenListSelector.replace('.', ''));
        controlButton.style.display = 'none'
    }

    /**
     * @return {NodeListOf<HTMLUListElement>}
     * @private
     */
    get _hiddenListElements() {
        const {hiddenListSelector} = this._options;
        return this._domElement().querySelectorAll(hiddenListSelector);
    }
}

export default GovSideNav;
