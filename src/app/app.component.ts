import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Employee Tracker';
    materials: Array<any> = [];

    constructor() {
        for(let i = 0; i < 50; i++) {
            this.materials.push({ 'id': i+1, 'name': 'Acrylic (Transparent)', 'quantity': '25', 'price': '$2.90' });
        }
    }
    //  = [
    //     { 'id': 1, 'name': 'Acrylic (Transparent)', 'quantity': '25', 'price': '$2.90' },
    //     { 'id': 2, 'name': 'Plywood (Birch)', 'quantity': '50', 'price': '$1.25' },
    //     { 'id': 3, 'name': 'Laminate (Gold on Blue)', 'quantity': '10', 'price': '$2.35' },
    // ];
}
