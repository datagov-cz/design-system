import GovFormText from './GovFormText';
import GovFileInput from './GovFileInput';
import GovSelect from './GovSelect';
import GovMultiSelect from './GovMultiSelect';
import GovTimePicker from './GovTimePicker';
import GovDatePicker from './GovDatePicker';

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

/**
 * @return {void}
 */
export function initSelects() {
    const selects = document.querySelectorAll('.gov-select select:not([multiple])');
    selects.forEach((select) => new GovSelect(select));
}

/**
 * @return {void}
 */
export function initMultipleSelect() {
    const multipleSelectContainers = document.querySelectorAll('select[multiple]');
    multipleSelectContainers.forEach((select) => new GovMultiSelect(select));
}

/**
 * @return {void}
 */
export function initTimePicker() {
    const inputs = document.querySelectorAll('.gov-timepicker');
    inputs.forEach((input) => new GovTimePicker(input));
}

/**
 * @return {void}
 */
export function initDatePicker() {
    const inputs = document.querySelectorAll('.gov-datepicker');
    inputs.forEach((input) => new GovDatePicker(input));
}
