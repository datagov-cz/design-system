import './utils/dom';

import {initAccordions} from './_Gov/Accordion/default';
import {initTabs} from './_Gov/Tabs/default';
import {initScrollUpControler} from './_Gov/Control/default';
import {initGovSliderBars} from './_Gov/Slider/default';
import {initHamburgerNavs} from './_Gov/Nav/default';
import {initPortalHamburgerNavs, destroyPortalHamburgerNavs} from './_Gov/PortalHamburgerNav/default';
import {
    initFormTexts,
    initFileInputs,
    initSelects,
    initMultipleSelect,
    initTimePicker,
    initDatePicker
} from './_Gov/Form/default';
import {initModals} from './_Gov/Modal/default';
import {initCalendar} from './_Gov/Calendar/default';
import {initTables, initSortableTable} from './_Gov/Table/default';
import './_Gov/Form/GovAutocomplete';

var hamburgerNavInited = false;

initTabs();
initAccordions();
initScrollUpControler();
initGovSliderBars();
initHamburgerNavs();
initFormTexts();
initFileInputs();
initTimePicker();
initSelects();
initMultipleSelect();
initCalendar();
initDatePicker();
initModals();
initTables();
initSortableTable();

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
