import { NgModule } from '@angular/core';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

@NgModule
({
    imports: 
    [
        MatInputModule,
        MatFormFieldModule,
        NgxMaterialTimepickerModule
    ],
    exports:
    [
        MatInputModule,
        MatFormFieldModule,
        NgxMaterialTimepickerModule
    ]
})

export class MaterialModule { }