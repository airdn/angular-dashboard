import { Component, output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';

@Component({
    selector: 'app-header',
    imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatBadgeModule, MatDividerModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    public menuToggled = output<void>();

    public onClick() {
        this.menuToggled.emit();
    }
}
