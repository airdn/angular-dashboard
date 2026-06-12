import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

export interface MenuItem {
    label: string;
    icon: string;
    route: string;
    badge?: number;
}

/**
 * Боковая панель с основной навигацией.
 */
@Component({
    selector: 'app-sidebar',
    imports: [
        RouterLinkActive,
        RouterLink,
        MatListModule,
        MatIconModule,
        MatDividerModule
    ],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
    public menuItems: MenuItem[] = [
        { label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
        { label: 'Panels', icon: 'solar_power', route: '/panels' },
        { label: 'Alerts', icon: 'warning', route: '/alerts', badge: 5 },
        { label: 'Reports', icon: 'assessment', route: '/reports' },
        { label: 'Map', icon: 'map', route: '/map' }
    ];

    public secondaryItems: MenuItem[] = [
        { label: 'Settings', icon: 'settings', route: '/settings' },
        { label: 'Help', icon: 'help', route: '/help' }
    ];
}
