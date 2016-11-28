import { Component } from '@angular/core';

@Component({
    selector: 'et-app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Employee Tracker';
    materials: Array<any> = [];

    constructor() {
        for(let i = 0; i < 10; i++) {
            this.materials.push({ 'id': i + 1, 'name': 'Acrylic (Transparent)', 'quantity': '25', 'price': '$2.90' });
        }
    }
}
