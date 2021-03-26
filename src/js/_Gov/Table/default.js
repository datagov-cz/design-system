import GovTable from './GovTable';
import GovSortableTable from './GovSortableTable';

/**
 * @return {void}
 */
export function initTables() {
    const tableContainers = document.querySelectorAll('.gov-table-cover');
    tableContainers.forEach((table) => new GovTable(table));
}

/**
 * @return {void}
 */
export function initSortableTable() {
    const table = document.querySelector('.gov-sortable-table');
    if (table) new GovSortableTable(table);
}
