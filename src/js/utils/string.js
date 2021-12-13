/**
 * @param {string|number} string
 * @param {string} char
 * @param {number} length
 * @return {string}
 */
export function padStart(string, char = '0', length = 2) {
    return String(string).padStart(length, char);
}


/**
 * @param {String} string
 * @return {String}
 */
export function removeDiacritics(string) {
    if (!string) return string;
    return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
