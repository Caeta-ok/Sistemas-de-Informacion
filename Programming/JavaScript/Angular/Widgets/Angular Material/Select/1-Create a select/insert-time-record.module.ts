import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { ActivitySelectorComponent } from './activity-selector/activity-selector.component';

@NgModule
({
    declarations: 
    [
        InsertTimeRecordComponent,
        ActivitySelectorComponent
    ],
    imports: 
    [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    exports:
    [
        InsertTimeRecordComponent,
        ActivitySelectorComponent
    ],
})
 export class InsertTimeRecordModule { }