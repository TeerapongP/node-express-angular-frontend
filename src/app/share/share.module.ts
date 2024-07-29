import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button'; // Import PrimeNG ButtonModule

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ButtonModule // Add ButtonModule to imports
    ],
    exports: [
        ButtonModule // Export ButtonModule so it can be used in other modules
    ]
})
export class ShareModule { }
