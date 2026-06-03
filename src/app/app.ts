import { Component } from '@angular/core';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

/**
 * Корневой компонент приложения.
 * Отображает основной макет.
 */
@Component({
    selector: 'app-root',
    imports: [MainLayoutComponent],
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App {}
