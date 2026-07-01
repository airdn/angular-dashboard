import { inject, Injectable } from '@angular/core';
import { catchError, Observable, shareReplay, throwError } from 'rxjs';

import { MockPanelsService } from '@features/smart-components/panels/services/mock-panels.service';
import { Panel, PanelSummary } from '@features/smart-components/panels/services/panels.types';

/**
 * Пример использования: Получение списка панелей.
 * Организует получение панелей с обработкой ошибок.
 */
@Injectable({
    providedIn: 'root'
})
export class PanelsManagerService {
    private readonly mockPanelsService = inject(MockPanelsService);

    /**
     * Получает полные данные всех панелей.
     */
    public execute(): Observable<Panel[]> {
        return this.mockPanelsService.getPanels().pipe(
            shareReplay(1),
            catchError(error => {
                console.error('Ошибка при получении данных панелей:', error);
                return throwError(() => new Error('Не удалось загрузить панели. Пожалуйста, попробуйте еще раз.'));
            })
        );
    }

    /**
     * Получает упрощенные данные всех панелей.
     */
    public executeSummaries(): Observable<PanelSummary[]> {
        return this.mockPanelsService.getPanelSummaries().pipe(
            shareReplay(1),
            catchError(error => {
                console.error('Ошибка при получения упрощенных данных панелей:', error);
                return throwError(() => new Error('Не удалось загрузить панели. Пожалуйста, попробуйте еще раз.'));
            })
        );
    }
}
