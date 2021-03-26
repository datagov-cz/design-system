/**
 * @param {Element|HTMLElement|null} element
 * @return {Element|null}
 */
export const getFirstFocusableElement = (element = null) => {
    element = element || document;
    const elements = element.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    return elements.length ? elements[0] : null;
}
