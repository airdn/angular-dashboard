import { Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

export type ErrorMessageSeverity = 'error' | 'warning' | 'info';

/**
 * Переиспользуемый компонент сообщения об ошибке.
 * Отображает ошибку с возможностью повторной попытки.
 */
@Component({
    selector: 'app-error-message',
    imports: [MatIconModule, MatButtonModule],
    templateUrl: './error-message.component.html',
    styleUrl: './error-message.component.scss'
})
export class ErrorMessageComponent {
    public readonly iconMap = {
        error: 'error',
        warning: 'warning',
        info: 'info'
    };

    public title = input('Error');
    public message = input('An unexpected error occurred');
    public severity = input<ErrorMessageSeverity>('error');
    public showRetry = input<boolean>(true);
    public compact = input<boolean>(false);

    public retry = output<void>();

    public onRetry() {
        this.retry.emit();
    }
}
