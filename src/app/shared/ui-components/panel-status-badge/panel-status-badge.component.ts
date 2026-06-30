import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { PanelStatus } from '@features/smart-components/panels/services/panels.types';
import { PanelStatusPipe } from '@features/smart-components/panels/pipes/panel-status.pipe';

type IconMap = Record<PanelStatus, string>;

/**
 * Глупый переиспользуемый компонент, отображающий значок со статусом панели.
 * Он только получает данные через вход, без какой-либо бизнес-логики.
 */
@Component({
    selector: 'app-panel-status-badge',
    imports: [PanelStatusPipe, MatIconModule],
    templateUrl: './panel-status-badge.component.html',
    styleUrl: './panel-status-badge.component.scss'
})
export class PanelStatusBadgeComponent {
    public status = input.required<PanelStatus>();

    public readonly iconMap: IconMap = {
        active: 'check_circle',
        maintenance: 'build',
        inactive: 'cancel',
        warning: 'warning'
    };
}
