import GovTabs from './GovTabs';

/**
 * @return {void}
 */
export function initTabs() {
    const tabsContainers = document.querySelectorAll('.gov-tabs');
    tabsContainers.forEach((tabs) => new GovTabs(tabs));
}
