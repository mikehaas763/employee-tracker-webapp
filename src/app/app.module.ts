import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { MdDataTableModule } from 'ng2-material';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { EmployeeModule } from './employee/employee.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        CoreModule,
        EmployeeModule,
        MdDataTableModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
