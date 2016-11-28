import { Component, OnInit } from '@angular/core';
import { AddEmployeeOpener } from '../../employee/add-employee/add-employee-opener';

@Component({
    selector: 'et-app-toolbar',
    templateUrl: './app-toolbar.component.html',
    styleUrls: ['./app-toolbar.component.css']
})
export class AppToolbarComponent implements OnInit {
    public title = 'Employee Tracker';

    constructor(private addEmployeeOpener: AddEmployeeOpener) { }

    openAddEmployeeDialog() {
        this.addEmployeeOpener.openDialog();
    }

    ngOnInit() {
    }

}
