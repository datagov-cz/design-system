/*!
 * GovTabs
 * Copyright(c) 2020 Ministerstvo vnitra České republiky
 * Copyright(c) 2020 Zdeněk Vítek
 * MIT Licensed
 *
 * Version 1.0.0
 */

'use strict';

import merge from 'lodash/merge';
import {addClass, removeClass} from '../utils/classie';
import GovElement from '../mixins/GovElement';
import GovError from '../common/Error/gov.error';

class GovTabs extends GovElement {

    /**
     * @param {Element} el
     * @param {Object} options
     */
    constructor(el, options = {}) {
        super(el);
        this._defaults = {
            triggerSelector: '.gov-tabs__link',
            contentSelector: '.gov-tabs__content',
            events:          {
                onChange: null
            }
        }
        this._options = merge({}, this._defaults, options);
        this._activeIndex = 0;
        this._focusIndex = 0;
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
                this._goToTab(index);
                this._callChangeCallback(e);
            })
        });
        if (this._tabList) {
            this._tabList.addEventListener('keydown', (e) => this._handleArrows(e));
        }
    }

    /**
     *
     * @param {Event} e
     * @private
     */
    _handleArrows(e) {
        const {keyCode} = e;
        if (keyCode === 39 || keyCode === 37) {
            if (false === this._isTriggerIndex(this._focusIndex)) {
                return;
            }
            this._triggerElements[this._focusIndex].setAttribute('tabindex', '-1');

            if (keyCode === 39) {
                this._focusIndex++;
                if (this._focusIndex >= this._triggerElements.length) {
                    this._focusIndex = 0;
                }
            } else if (keyCode === 37) {
                this._focusIndex--;
                if (this._focusIndex < 0) {
                    this._focusIndex = this._triggerElements.length - 1;
                }
            }
            if (this._isTriggerIndex(this._focusIndex)) {
                this._triggerElements[this._focusIndex].setAttribute('tabindex', '0');
                this._triggerElements[this._focusIndex].focus();
            }
        }
    }

    /**
     * @param {Number} index
     * @return {Boolean}
     * @private
     */
    _goToTab(index) {
        if (index === this._activeIndex || false === this._isContentIndex(index)) {
            return false;
        }

        // Prepare triggers
        const activeTriggerElement = this._triggerElements[this._activeIndex];
        const nextTriggerElement = this._triggerElements[index];

        activeTriggerElement.setAttribute('aria-selected', false);
        nextTriggerElement.setAttribute('aria-selected', true);

        removeClass(activeTriggerElement, 'is-active');
        addClass(nextTriggerElement, 'is-active');

        // Prepare contents
        const activeContentElement = this._contentElements[this._activeIndex];
        const nextContentElement = this._contentElements[index];

        activeContentElement.setAttribute('hidden', true);
        nextContentElement.setAttribute('hidden', false);

        removeClass(activeContentElement, 'is-active');
        addClass(nextContentElement, 'is-active');

        this._activeIndex = this._focusIndex = index;
    }

    /**
     * @param {Event} e
     * @return {void}
     * @private
     */
    _callChangeCallback(e) {
        const {onChange} = this._options.events;
        if (onChange && typeof onChange === 'function') {
            onChange(e);
        }
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
        return this._containerElement.querySelectorAll(triggerSelector);
    }

    /**
     * @return {NodeListOf<Element>}
     * @private
     */
    get _contentElements() {
        const {contentSelector} = this._options;
        return this._containerElement.querySelectorAll(contentSelector);
    }

    /**
     * @return {Element}
     * @private
     */
    get _tabList() {
        return this._containerElement.querySelector('[role="tablist"]');
    }
}

window.GovTabs = GovTabs;
export default GovTabs;
