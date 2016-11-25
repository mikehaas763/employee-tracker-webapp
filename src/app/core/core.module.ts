import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { MaterialModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
    ],
    exports: [
        AppToolbarComponent,
    ],
    declarations: [
        AppToolbarComponent,
    ]
})
export class CoreModule { }
