import { Component, input, output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { Panel } from '@features/smart-components/panels/services/panels.types';
import { PanelStatusBadgeComponent } from '@shared/ui-components/panel-status-badge/panel-status-badge.component';
import { EnergyUnitPipe, PercentagePipe } from '@features/smart-components/panels/pipes/energy-unit.pipe';

/**
 * Глупый переиспользуемый компонент для отображения панели.
 * Он получает данные только через @Input и генерирует события через @Output.
 * Angular 19+: Использует input() и output() вместо декораторов.
 */
@Component({
    selector: 'app-panel-card',
    imports: [
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        PanelStatusBadgeComponent,
        EnergyUnitPipe,
        PercentagePipe
    ],
    templateUrl: './panel-card.component.html',
    styleUrl: './panel-card.component.scss'
})
export class PanelCardComponent {
    // Angular 19+: Входные сигналы (более реактивные, чем @Input)
    public panel = input.required<Panel>();

    // Angular 19+: функция output() вместо @Output EventEmitter
    public viewDetails = output<string>();

    public onClick(): void {
        this.viewDetails.emit(this.panel().id);
    }
}
