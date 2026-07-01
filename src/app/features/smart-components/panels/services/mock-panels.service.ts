import { Injectable } from '@angular/core';
import { delay, map, Observable, of, tap, throwError } from 'rxjs';

import {
    IPanelService,
    Panel,
    PanelStatus,
    PanelSummary
} from '@features/smart-components/panels/services/panels.types';
import { MOCK_PANELS } from '@features/smart-components/metrics/services/mock-data';
import { PanelAdapter } from '@features/smart-components/panels/services/panel.adapter';

/**
 * Имитация работы сервиса панелей.
 * Имитирует HTTP-запросы с задержками в целях разработки.
 *
 * Отвечает на вопрос "Откуда брать данные?"
 */
@Injectable({
    providedIn: 'root'
})
export class MockPanelsService implements IPanelService {
    private panels = [...MOCK_PANELS];

    public getPanels(): Observable<Panel[]> {
        return of(this.panels).pipe(
            delay(800),
            tap(() => console.log('[MOCK] GET /api/panels')),
            map(panels => panels.map(p => PanelAdapter.toDomain(p)))
        );
    }

    public getPanelSummaries(): Observable<PanelSummary[]> {
        return of(this.panels).pipe(
            delay(500),
            tap(() => console.log('[MOCK] GET /api/panels/summaries')),
            map(panels => panels.map(p => PanelAdapter.toSummary(p)))
        );
    }

    public getPanelById(id: string): Observable<Panel> {
        const panel = this.panels.find(p => p.id === id);

        if (!panel) {
            return throwError(() => new Error(`Панель с ID ${id} не найдена`)).pipe(delay(300));
        }

        return of(panel).pipe(
            delay(600),
            tap(() => console.log(`[MOCK] GET /api/panels/${id}`)),
            map(p => PanelAdapter.toDomain(p))
        );
    }

    public updatePanelStatus(id: string, status: PanelStatus): Observable<Panel> {
        const panelIndex = this.panels.findIndex(p => p.id === id);

        if (panelIndex === -1) {
            return throwError(() => new Error(`Панель с ID ${id} не найдена`)).pipe(delay(300));
        }

        this.panels[panelIndex] = {
            ...this.panels[panelIndex],
            status
        };

        return of(this.panels[panelIndex]).pipe(
            delay(500),
            tap(() => console.log(`[MOCK] PATCH /api/panels/${id}/status`, status)),
            map(p => PanelAdapter.toDomain(p))
        );
    }

    public getPanelsByStatus(status: PanelStatus): Observable<Panel[]> {
        return of(this.panels.filter(p => p.status === status)).pipe(
            delay(600),
            tap(() => console.log(`[MOCK] GET /api/panels?status=${status}`)),
            map(panels => panels.map(p => PanelAdapter.toDomain(p)))
        )
    }
}
