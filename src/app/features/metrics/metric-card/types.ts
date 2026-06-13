export interface MetricCard {
    label: string;
    value: number;
    unit: string;
    icon: string;
    trend: MetricTrend;
    color: MetricColor;
}

export interface MetricTrend {
    direction: 'up' | 'down' | 'stable';
    percentage: number;
    period: string;
}

export type MetricColor = 'primary' | 'accent' | 'warn' | 'success';
