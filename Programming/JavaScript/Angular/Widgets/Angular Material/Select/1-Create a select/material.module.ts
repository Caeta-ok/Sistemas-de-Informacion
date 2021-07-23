import { NgModule } from '@angular/core';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSelectModule } from '@angular/material/select';

@NgModule
({
    imports: 
    [
        MatInputModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        MatSelectModule
    ],
    exports:
    [
        MatInputModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        MatSelectModule
    ]
})

export class MaterialModule { }