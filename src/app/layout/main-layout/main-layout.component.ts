import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

/**
 * Основной макет приложения.
 * Объединяет хэдер, сайдбар и область контента.
 * Адаптивный дизайн: боковая панель скрывается на мобильных устройствах.
 */
@Component({
    selector: 'app-main-layout',
    imports: [RouterOutlet, HeaderComponent, SidebarComponent],
    templateUrl: './main-layout.component.html',
    styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
    public onMenuToggle(): void {}
}
