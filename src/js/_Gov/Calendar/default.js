import GovCalendar from './GovCalendar';
import GovDatePicker from './GovDatePicker';

/**
 * @return {void}
 */
export function initCalendar() {
    const calendars = document.querySelectorAll('.gov-calendar');
    calendars.forEach((calendar) => new GovCalendar(calendar));
}

/**
 * @return {void}
 */
export function initDatePicker() {
    const inputs = document.querySelectorAll('.gov-datepicker');
    inputs.forEach((input) => new GovDatePicker(input));
}
