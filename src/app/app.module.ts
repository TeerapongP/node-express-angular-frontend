//Module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShareModule } from './share/share.module';

//Component
import { AppComponent } from './app.component';
import { ButtonComponent } from './share/button/button.component';
import { DropdownComponent } from './share/dropdown/dropdown.component';



@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    ShareModule // Add ShareModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
