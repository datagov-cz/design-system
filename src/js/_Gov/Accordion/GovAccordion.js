/*!
 * GovAccordion
 * Copyright(c) 2020 Ministerstvo vnitra České republiky
 * Copyright(c) 2020 Zdeněk Vítek
 * MIT Licensed
 *
 * Version 1.0.0
 */

'use strict';

import merge from 'lodash/merge';
import {hasClass, toggleClass} from '../../utils/classie';
import GovElement from '../mixins/GovElement';
import GovError from '../common/Error/gov.error';

class GovAccordion extends GovElement {
    /**
     * @param {Element} el
     * @param {Object} options
     */
    constructor(el, options = {}) {
        super(el);
        this._defaults = {
            triggerSelector: '.gov-accordion__header',
            contentSelector: '.gov-accordion__content',
        }
        this._options = merge({}, this._defaults, options);
        this._init();
    }

    /**
     * @return {void}
     * @private
     */
    _init() {
        try {
            this._checkElements();
            this._bindEvents();
        } catch (e) {
            console.warn(e.message);
        }
    }

    /**
     * @return {void}
     * @private
     * @throws GovError
     */
    _checkElements() {
        if (this._contentElements.length === 0 || this._triggerElements.length === 0) {
            throw new GovError('We could not find all the necessary elements for [GovAccordion]');
        }
    }

    /**
     * @return {void}
     * @private
     */
    _bindEvents() {
        this._triggerElements.forEach((triggerElement, index) => {
            triggerElement.addEventListener('click', (e) => {
                e.preventDefault();
                this._revealContent(index);
            })
        });
    }

    /**
     * @param {Number} index
     * @return {Boolean}
     * @private
     */
    _revealContent(index) {
        if (false === this._isContentIndex(index)) {
            return false;
        }

        const triggerElement = this._triggerElements[index];
        const contentElement = this._contentElements[index];

        if (!hasClass(triggerElement, 'is-expanded')) {
            this._expandContent(contentElement);
            triggerElement.setAttribute('aria-expanded', true);
        } else {
            this._collapseContent(contentElement)
            triggerElement.setAttribute('aria-expanded', false);
        }

        toggleClass(triggerElement, 'is-expanded');
        return true;
    }

    /**
     * @param {HTMLElement} element
     * @return {void}
     * @private
     */
    _collapseContent(element) {
        const contentHeight = element.scrollHeight;
        const contentTransition = element.style.transition;

        element.style.transition = '';

        requestAnimationFrame(function () {
            element.style.height = contentHeight + 'px';
            element.style.transition = contentTransition;
            requestAnimationFrame(function () {
                element.style.minHeight = 0 + 'px';
                element.style.height = 0 + 'px';
                element.style.visibility = 'hidden';
                element.style.overflow = 'hidden';
            });
        });
    }

    /**
     * @param {HTMLElement} element
     * @return {void}
     * @private
     */
    _expandContent(element) {
        const contentHeight = element.scrollHeight;

        element.style.minHeight = contentHeight + 'px';
        element.style.height = 'auto';
        element.style.visibility = 'visible';
        element.style.overflow = 'initial';

        const callee = function () {
            element.removeEventListener('transitionend', callee);
        };
        element.addEventListener('transitionend', callee, false);
    }

    /**
     * @param {Number} index
     * @return {Boolean}
     * @private
     */
    _isContentIndex(index) {
        return (index >= 0 && index <= (this._contentElements.length - 1));
    }

    /**
     * @param {Number} index
     * @return {Boolean}
     * @private
     */
    _isTriggerIndex(index) {
        return (index >= 0 && index <= (this._triggerElements.length - 1));
    }

    /**
     * @return {NodeListOf<Element>}
     * @private
     */
    get _triggerElements() {
        const {triggerSelector} = this._options;
        return this._containerElement.querySelectorAll(':scope > ' + triggerSelector);
    }

    /**
     * @return {NodeListOf<Element>}
     * @private
     */
    get _contentElements() {
        const {contentSelector} = this._options;
        return this._containerElement.querySelectorAll(':scope > ' + contentSelector);
    }
}

window.GovAccordion = GovAccordion;
export default GovAccordion;
