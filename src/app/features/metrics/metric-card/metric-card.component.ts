import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { MetricCard, MetricTrend } from '@features/metrics/metric-card';

/**
 * Простой компонент для отображения одной метрики.
 * Он получает данные и отображает их визуально.
 */
@Component({
    selector: 'app-metric-card',
    imports: [MatIconModule, MatCardModule],
    templateUrl: './metric-card.component.html',
    styleUrl: './metric-card.component.scss'
})
export class MetricCardComponent {
    public metric = input.required<MetricCard>();

    public formatValue(value: number): string {
        if (value >= 1_000_000) {
            return `${(value / 1_000_000).toFixed(1)}M`;
        }

        if (value >= 1_000) {
            return `${(value / 1_000).toFixed(1)}K`;
        }

        return value.toLocaleString('es-AR');
    }

    public getTrendIcon(trend: MetricTrend): string {
        switch (trend.direction) {
            case 'up':
                return 'trending_up';
            case 'down':
                return 'trending_down';
            default:
                return 'trending_flat';
        }
    }
}
