import { Component, computed, inject, output, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { LoadingSpinnerComponent } from '@shared/ui-components/loading-spinner';
import { ErrorMessageComponent } from '@shared/ui-components/error-message';
import { PanelStatus } from '@features/smart-components/panels/services/panels.types';
import { PanelCardComponent } from '@shared/ui-components/panel-card/panel-card.component';
import { PanelsManagerService } from '@features/smart-components/panels/services/panels-manager.service';

/**
 * Умный компонент (контейнер), управляющий списком панелей.
 * Он понимает сценарии использования, управляет состоянием и передает данные UI-компонентам.
 * Использует `toSignal` для преобразования Observable в Signal.
 */
@Component({
    selector: 'app-panel-list',
    imports: [
        FormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        LoadingSpinnerComponent,
        ErrorMessageComponent,
        PanelCardComponent
    ],
    templateUrl: './panel-list.component.html',
    styleUrl: './panel-list.component.scss'
})
export class PanelListComponent {
    private readonly panelsManagerService = inject(PanelsManagerService);

    // Локальные состояния с использованием сигналов
    public searchTerm = signal('');
    public statusFilter = signal<PanelStatus | ''>('');
    public error = signal<string | null>(null);

    // Сигнал, полученный из Observable - современная реактивность Angular 19+
    // Без initialValue возвращает undefined во время загрузки (идеально для zoneless)
    public panels = toSignal(this.panelsManagerService.execute());

    // Вычисляемый сигнал для реактивной фильтрации
    public filteredPanels = computed(() => {
        const allPanels = this.panels() ?? [];
        const search = this.searchTerm().toLowerCase();
        const status = this.statusFilter();

        return allPanels.filter(panel => {
            const matchesSearch =
                !search ||
                panel.name.toLowerCase().includes(search) ||
                panel.location.city.toLowerCase().includes(search) ||
                panel.location.address.toLowerCase().includes(search);

            const matchesStatus = !status || panel.status === status;

            return matchesSearch && matchesStatus;
        });
    });

    // Событие для передачи выбранного элемента родительскому элементу
    // todo: подумать, нужно ли перепрокидывать событие viewDetails
    public panelSelected = output<string>();

    public onViewDetails(panelId: string): void {
        this.panelSelected.emit(panelId);
    }

    public loadPanels(): void {
        this.error.set(null);

        // Здесь можно дописать логику перезагрузки данных
    }

    public clearFilters(): void {
        this.searchTerm.set('');
        this.statusFilter.set('');
    }
}
