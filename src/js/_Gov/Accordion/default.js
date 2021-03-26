import GovAccordion from './GovAccordion';

/**
 * @return {void}
 */
export function initAccordions() {
    const accordionsContainers = document.querySelectorAll('.gov-accordion');
    accordionsContainers.forEach((accordion) => new GovAccordion(accordion));
}
