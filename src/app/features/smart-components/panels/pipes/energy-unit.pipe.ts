import { Pipe, PipeTransform } from '@angular/core';

/**
 * Пайп для форматирования значений энергии с соответствующими единицами измерения.
 * Автоматически преобразует значения между кВт/ч, МВт/ч и ГВт/ч.
 */
@Pipe({
    name: 'energyUnit'
})
export class EnergyUnitPipe implements PipeTransform {
    public transform(value: number | null | undefined, decimals: number = 1): string {
        if (value === null || value === undefined) {
            return '0 kWh';
        }

        if (value >= 1_000_000) {
            return `${(value / 1_000_000).toFixed(decimals)} GWh`;
        }

        if (value >= 1_000) {
            return `${(value / 1_000).toFixed(decimals)} MWh`;
        }

        return `${value.toFixed(decimals)} kWh`;
    }
}

/**
 * Пайп для форматирования денежных значений.
 */
@Pipe({
    name: 'currency'
})
export class CurrencyFormatPipe implements PipeTransform {
    public transform(value: number | null | undefined, currency: string = 'USD'): string {
        if (value === null || value === undefined) {
            return '$0';
        }

        return new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    }
}

/**
 * Пайп для форматирования процентов.
 */
@Pipe({
    name: 'percentage'
})
export class PercentagePipe implements PipeTransform {
    public transform(value: number | null | undefined, decimals: number = 1): string {
        if (value === null || value === undefined) {
            return '0%';
        }

        return `${value.toFixed(decimals)}%`;
    }
}
