import './utils/dom';

import {initAccordions} from './Accordion/default';
import {initTabs} from './Tabs/default';
import {initScrollUpControler} from './Control/default';
import {initGovSliderBars} from './Slider/default';
import {initHamburgerNavs, initGovSideNav} from './Nav/default';
import {initPortalHamburgerNavs, destroyPortalHamburgerNavs} from './PortalHamburgerNav/default';
import {
    initFormTexts,
    initFileInputs,
    initSelects,
    initMultipleSelect
} from './Form/default';
import {initModals} from './Modal/default';
import {initCalendar} from './Calendar/default';
import {initSortableTable} from './Table/default';
import './Form/GovAutocomplete';

/**
 * @return {void}
 */
function initGovComponents() {
    initScrollUpControler();
    initHamburgerNavs();
}

/**
 * @return {void}
 */
function reinitGovComponents() {
    initModals();
    initSortableTable();
    initFileInputs();
    initSelects();
    initMultipleSelect();
    initFormTexts();
    initTabs();
    initAccordions();
    initGovSliderBars();
    initCalendar();
    initGovSideNav();
}

window.reinitGovComponents = reinitGovComponents;
window.initGovComponents = initGovComponents;

initGovComponents();
reinitGovComponents();

let hamburgerNavInited = false;

function onWindowResize() {
    if (window.innerWidth < 672 && !hamburgerNavInited) {
        initPortalHamburgerNavs();
        hamburgerNavInited = true;
    }

    if (window.innerWidth > 671 && hamburgerNavInited) {
        destroyPortalHamburgerNavs();
        hamburgerNavInited = false;
    }
}

onWindowResize();
window.addEventListener('resize', onWindowResize);
