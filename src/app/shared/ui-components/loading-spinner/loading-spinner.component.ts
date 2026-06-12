import { Component, input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

export type LoadingSpinnerColorType = 'primary' | 'accent' | 'warn';

/**
 * Переиспользуемый компонент индикатора загрузки.
 * Отображает центрированный индикатор загрузки с возможностью добавления сообщения.
 */
@Component({
    selector: 'app-loading-spinner',
    imports: [MatProgressSpinnerModule],
    templateUrl: './loading-spinner.component.html',
    styleUrl: './loading-spinner.component.scss'
})
export class LoadingSpinnerComponent {
    public diameter = input<number>(40);
    public color = input<LoadingSpinnerColorType>('primary');

    public message = input<string>('');
    public overlay = input<boolean>(false);
    public fullscreen = input<boolean>(false);
}
