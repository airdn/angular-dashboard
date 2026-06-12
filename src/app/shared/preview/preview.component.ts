import { Component } from '@angular/core';

import { LoadingSpinnerComponent } from '@shared/ui-components/loading-spinner';
import { ErrorMessageComponent } from '@shared/ui-components/error-message';

/**
 * Просмотр превью компонентов
 */
@Component({
    selector: 'app-preview',
    imports: [LoadingSpinnerComponent, ErrorMessageComponent],
    templateUrl: './preview.component.html',
    styleUrl: './preview.component.scss'
})
export class PreviewComponent {}
