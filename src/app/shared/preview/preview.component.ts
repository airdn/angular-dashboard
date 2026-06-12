import { Component } from '@angular/core';

import { LoadingSpinnerComponent } from '@shared/ui-components/loading-spinner';

/**
 * Просмотр превью компонентов
 */
@Component({
    selector: 'app-preview',
    imports: [LoadingSpinnerComponent],
    templateUrl: './preview.component.html',
    styleUrl: './preview.component.scss'
})
export class PreviewComponent {}
