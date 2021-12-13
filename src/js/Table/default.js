import GovSortableTable from './GovSortableTable';

/**
 * @return {void}
 */
export function initSortableTable() {
    const table = document.querySelector('.gov-js-sortable-table');
    if (table) new GovSortableTable(table);
}
