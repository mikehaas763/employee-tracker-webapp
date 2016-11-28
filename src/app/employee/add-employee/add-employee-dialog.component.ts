import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
    selector: 'et-add-employee-dialog',
    template: `
    <button type="button" (click)="dialogRef.close('yes')">Yes</button>
    <button type="button" (click)="dialogRef.close('no')">No</button>
    `
})
export class AddEmployeeDialogComponent {
    constructor(public dialogRef: MdDialogRef<AddEmployeeDialogComponent>) { }
}
