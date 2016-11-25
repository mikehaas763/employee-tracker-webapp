import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { MdDataTableModule } from 'ng2-material';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';

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
        MdDataTableModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
