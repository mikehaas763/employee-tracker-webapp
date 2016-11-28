import { Injectable } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { AddEmployeeDialogComponent } from './add-employee-dialog.component';

@Injectable()
export class AddEmployeeOpener {
    dialogRef: MdDialogRef<AddEmployeeDialogComponent>;

    constructor(public dialog: MdDialog) { }

    openDialog() {
        this.dialogRef = this.dialog.open(AddEmployeeDialogComponent, {
            disableClose: false
        });

        this.dialogRef.afterClosed().subscribe(result => {
            console.log('result: ' + result);
            this.dialogRef = null;
        });
    }
}
