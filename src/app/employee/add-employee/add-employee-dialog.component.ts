import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { Employee, EmployeeDao } from '../';

@Component({
    selector: 'et-add-employee-dialog',
    templateUrl: './add-employee-dialog.component.html',
    styleUrls: ['./add-employee-dialog.component.css'],
})
export class AddEmployeeDialogComponent {
    model: Employee = new Employee();

    constructor(
        public dialogRef: MdDialogRef<AddEmployeeDialogComponent>,
        private employeeDao: EmployeeDao
    ) { }

    onSubmit() {
        this.employeeDao.sendEmployee(this.model);
        this.dialogRef.close();
    }
}
