import GovHamburgerNav from './GovHamburgerNav';

/**
 * @return {void}
 */
export function initHamburgerNavs() {
    const navContainers = document.querySelectorAll('.gov-container');
    navContainers.forEach((container) => {
        const hamburger = container.querySelector('.gov-header__hamburger');
        const nav = container.querySelector('.gov-header__nav');
        if (hamburger && nav) {
            new GovHamburgerNav(hamburger, nav);
        }
    });
}
