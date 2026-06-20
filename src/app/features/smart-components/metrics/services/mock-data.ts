import { Panel } from '@features/smart-components/panels/services/panels.types';
import { Alert, DashboardMetrics, EnergyData } from '@features/smart-components/metrics/services/metrics.types';

export const MOCK_PANELS: Panel[] = [
    {
        id: 'PANEL-001',
        name: 'Panel Aurora',
        location: {
            address: 'St. Krasnaya, 15',
            city: 'Sochi',
            region: 'Krasnodarskiy Krai',
            coordinates: { lat: -34.5875, lng: -58.3772 }
        },
        status: 'active',
        currentProduction: 305.2,
        estimatedProduction: 320,
        efficiency: 95.4,
        installationDate: new Date('2023-05-20'),
        lastMaintenance: new Date('2024-10-15')
    },
    {
        id: 'PANEL-002',
        name: 'Panel Altai',
        location: {
            address: 'St. Lenina, 87',
            city: 'Barnaul',
            region: 'Altaiskiy Krai',
            coordinates: { lat: 53.3546, lng: 83.7492 }
        },
        status: 'active',
        currentProduction: 520.3,
        estimatedProduction: 450,
        efficiency: 91.7,
        installationDate: new Date('2023-11-01'),
        lastMaintenance: new Date('2024-11-28')
    }
];

export const MOCK_ALERTS: Alert[] = [
    {
        id: 'ALERT-001',
        type: 'low_efficiency',
        severity: 'warning',
        message: 'Panel PANEL-001 operating at 64.6% efficiency',
        panelId: 'PANEL-001',
        createdAt: new Date('2025-01-25T10:30:00'),
        acknowledged: false
    },
    {
        id: 'ALERT-002',
        type: 'maintenance_due',
        severity: 'info',
        message: 'Panel PANEL-002 requires scheduled maintenance',
        panelId: 'PANEL-002',
        createdAt: new Date('2025-01-24T14:15:00'),
        acknowledged: false
    }
];

export const MOCK_DASHBOARD_METRICS: DashboardMetrics = {
    totalPanels: MOCK_PANELS.length,
    activePanels: MOCK_PANELS.filter(p => p.status === 'active').length,
    panelsInMaintenance: MOCK_PANELS.filter(p => p.status === 'maintenance').length,
    inactivePanels: MOCK_PANELS.filter(p => p.status === 'inactive').length,
    totalEnergyProduction: MOCK_PANELS.reduce((sum, p) => sum + p.currentProduction, 0),
    averageEfficiency: MOCK_PANELS.filter(p => p.status === 'active')
        .reduce((sum, p, _, arr) => sum + p.efficiency / arr.length, 0),
    co2Saved: 125.8,
    revenueGenerated: 45230,
    alerts: MOCK_ALERTS.filter(a => !a.acknowledged)
};

export function generateMockEnergyData(startDate: Date, endDate: Date): EnergyData[] {
    const data: EnergyData[] = [];
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        const production = 800 + Math.random() * 400;
        const consumption = 600 + Math.random() * 200;

        data.push({
            date: new Date(currentDate),
            production: Math.round(production * 10) / 10,
            consumption: Math.round(consumption * 10) / 10,
            netEnergy: Math.round((production - consumption) * 10) / 10
        });

        currentDate.setDate(currentDate.getDate() + 1);
    }

    return data;
}
