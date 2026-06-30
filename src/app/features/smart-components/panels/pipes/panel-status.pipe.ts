import { Pipe, PipeTransform } from '@angular/core';

import { PanelStatus } from '@features/smart-components/panels/services/panels.types';

type PanelMap = Record<PanelStatus, string>;

/**
 * Пайп для трансформатора на панели с разборчивым текстом.
 */
@Pipe({
    name: 'panelStatus'
})
export class PanelStatusPipe implements PipeTransform {
    private readonly statusMap: PanelMap = {
        active: 'Active',
        maintenance: 'Maintenance',
        inactive: 'Inactive',
        warning: 'Warning'
    };

    public transform(status: PanelStatus): string {
        return this.statusMap[status] ?? 'Unknown';
    }
}

/**
 * Пайп для получения CSS-класса в зависимости от состояния.
 */
@Pipe({
    name: 'panelStatusClass',
    standalone: true
})
export class PanelStatusClassPipe implements PipeTransform {
    private readonly classMap: PanelMap = {
        active: 'status-active',
        maintenance: 'status-maintenance',
        inactive: 'status-inactive',
        warning: 'status-warning'
    };

    transform(status: PanelStatus): string {
        return this.classMap[status] ?? 'status-unknown';
    }
}

/**
 * Пайп для получения цвета материала в зависимости от состояния.
 */
@Pipe({
    name: 'panelStatusColor',
    standalone: true
})
export class PanelStatusColorPipe implements PipeTransform {
    private readonly colorMap: Record<PanelStatus, 'primary' | 'accent' | 'warn'> = {
        active: 'primary',
        maintenance: 'accent',
        inactive: 'warn',
        warning: 'warn'
    };

    transform(status: PanelStatus): 'primary' | 'accent' | 'warn' {
        return this.colorMap[status] ?? 'primary';
    }
}
