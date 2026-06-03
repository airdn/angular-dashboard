import { Component, output } from '@angular/core';

@Component({
    selector: 'app-button',
    imports: [],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss'
})
export class ButtonComponent {
    public buttonClick = output<PointerEvent>();

    public onClick(event: PointerEvent): void {
        this.buttonClick.emit(event);
    }
}
