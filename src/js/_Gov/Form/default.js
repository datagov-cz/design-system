import GovFormText from './GovFormText';
import GovFileInput from './GovFileInput';

/**
 * @return {void}
 */
export function initFormTexts() {
    const inputs = document.querySelectorAll('input[type="text"], input[type="date"], input[type="tel"], input[type="email"], textarea');
    inputs.forEach((input) => new GovFormText(input));
}

/**
 * @return {void}
 */
export function initFileInputs() {
    const fileInputs = document.querySelectorAll('.gov-fileinput');
    fileInputs.forEach((fileinput) => new GovFileInput(fileinput));
}
