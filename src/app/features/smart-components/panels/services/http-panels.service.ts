import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import {
    IPanelService,
    Panel,
    PanelStatus,
    PanelSummary
} from '@features/smart-components/panels/services/panels.types';
import { PanelAdapter } from '@features/smart-components/panels/services/panel.adapter';
import { environment } from '../../../../../environment/environment';

/**
 * Работа сервиса панелей.
 * Отправляет реальные HTTP-запросы к бэкенду.
 * Используется в продакшене при наличии реального бэкенда.
 *
 * Отвечает на вопрос "Откуда брать данные?"
 */
@Injectable({
    providedIn: 'root'
})
export class HttpPanelsService implements IPanelService {
    private readonly httpClient = inject(HttpClient);
    private readonly baseUrl = `${environment.apiUrl}/panels`;

    public getPanels(): Observable<Panel[]> {
        return this.httpClient.get<Panel[]>(this.baseUrl).pipe(
            map(panels => panels.map(p => PanelAdapter.toDomain(p)))
        );
    }

    public getPanelSummaries(): Observable<PanelSummary[]> {
        return this.httpClient.get<Panel[]>(`${this.baseUrl}/summaries`).pipe(
            map(panels => panels.map(p => PanelAdapter.toSummary(p)))
        );
    }

    public getPanelById(id: string): Observable<Panel> {
        return this.httpClient.get<Panel>(`${this.baseUrl}/${id}`).pipe(
            map(panel => PanelAdapter.toDomain(panel))
        );
    }

    public updatePanelStatus(id: string, status: PanelStatus): Observable<Panel> {
        return this.httpClient.patch<Panel>(`${this.baseUrl}/${id}/status`, { status }).pipe(
            map(panel => PanelAdapter.toDomain(panel))
        );
    }

    public getPanelsByStatus(status: PanelStatus): Observable<Panel[]> {
        return this.httpClient.get<Panel[]>(this.baseUrl, {
            params: { status }
        }).pipe(
            map(panels => panels.map(p => PanelAdapter.toDomain(p)))
        );
    }
}
