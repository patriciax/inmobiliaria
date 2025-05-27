import { Tooltip, Popover } from 'bootstrap';

export default function initComponent(): void {
    const tooltipTriggerList = [...document.querySelectorAll('[data-bs-toggle="tooltip"]')];
    tooltipTriggerList.forEach(tooltipTriggerEl => {
        new Tooltip(tooltipTriggerEl);
    });

    const popoverTriggerList = [...document.querySelectorAll('[data-bs-toggle="popover"]')];
    popoverTriggerList.forEach(popoverTriggerEl => {
        new Popover(popoverTriggerEl);
    });
}
