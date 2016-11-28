import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { MdDataTableModule } from 'ng2-material';

import { AddEmployeeDialogComponent } from './add-employee/add-employee-dialog.component';
import { AddEmployeeOpener } from './add-employee/add-employee-opener';


@NgModule({
    imports: [
        // BrowserModule,
        // FormsModule,
        // HttpModule,
        // MaterialModule.forRoot(),
        // CoreModule,
        // MdDataTableModule,
    ],
    declarations: [
        AddEmployeeDialogComponent,
    ],
    entryComponents: [
        AddEmployeeDialogComponent,
    ],
    providers: [
        AddEmployeeOpener,
    ],
})
export class EmployeeModule { }
