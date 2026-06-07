import { Component } from '@angular/core';

import { ButtonComponent } from '../../shared/ui-components/button/button.component';

@Component({
    selector: 'app-dashboard-page',
    imports: [ButtonComponent],
    templateUrl: './dashboard-page.component.html',
    styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {
    public onButtonClick(event: PointerEvent) {
        console.log(event);
    }
}
