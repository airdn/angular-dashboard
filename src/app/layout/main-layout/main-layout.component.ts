import { Component, inject, OnInit, signal, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

/**
 * Основной макет приложения.
 * Объединяет хэдер, сайдбар и область контента.
 * Адаптивный дизайн: боковая панель скрывается на мобильных устройствах.
 */
@Component({
    selector: 'app-main-layout',
    imports: [
        RouterOutlet,
        MatSidenavModule,
        HeaderComponent,
        SidebarComponent
    ],
    templateUrl: './main-layout.component.html',
    styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent implements OnInit {
    private breakpointObserver = inject(BreakpointObserver);

    public isMobile = signal<boolean>(false);
    public sidenav = viewChild<MatSidenav>('sidenav');

    public ngOnInit() {
        this.breakpointObserver
            .observe([Breakpoints.Handset])
            .subscribe(result => {
                this.isMobile.set(result.matches);
            });
    }

    public onMenuToggle(): void {
        this.sidenav()?.toggle();
    }
}
