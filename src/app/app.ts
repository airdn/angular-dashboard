import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

@Component({
    selector: 'app-root',
    imports: [MainLayoutComponent],
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App {}
