import { Panel, PanelSummary } from '@features/smart-components/panels/services/panels.types';

/**
 * Адаптер для преобразования данных панели между различными форматами.
 * Полезен, когда внешний API использует формат, отличающийся от формата предметной области.
 */
export class PanelAdapter {
    /**
     * Преобразует внешние данные в формат предметной области.
     * В данном случае имитация та же, но в производственной среде она может отличаться.
     */
    public static toDomain(raw: Panel): Panel {
        return {
            ...raw,
            installationDate:
                raw.installationDate instanceof Date ? raw.installationDate : new Date(raw.installationDate),
            lastMaintenance: raw.lastMaintenance
                ? raw.lastMaintenance instanceof Date
                    ? raw.lastMaintenance
                    : new Date(raw.lastMaintenance)
                : null
        };
    }

    /**
     * Преобразуйте полную панель в её сокращённую версию.
     */
    public static toSummary(panel: Panel): PanelSummary {
        return {
            id: panel.id,
            name: panel.name,
            status: panel.status,
            currentProduction: panel.currentProduction,
            city: panel.location.city
        };
    }

    /**
     * Преобразует доменные данные в формат, ожидаемый API.
     * Полезно для отправки данных на бэкенд.
     */
    public static toApi(panel: Panel): Record<string, unknown> {
        return {
            id: panel.id,
            name: panel.name,
            location: {
                address: panel.location.address,
                city: panel.location.city,
                region: panel.location.region,
                lat: panel.location.coordinates.lat,
                lng: panel.location.coordinates.lng
            },
            status: panel.status,
            current_production: panel.currentProduction,
            estimated_production: panel.estimatedProduction,
            efficiency: panel.efficiency,
            installation_date: panel.installationDate.toISOString(),
            last_maintenance: panel.lastMaintenance?.toISOString() ?? null
        };
    }
}
