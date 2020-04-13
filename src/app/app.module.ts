import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicformComponent } from './dynamicform/dynamicform.component';
import { DynamicfieldComponent } from './dynamicfield/dynamicfield.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormControlService } from './form-control.service';


@NgModule({
  declarations: [
    AppComponent,
    DynamicformComponent,
    DynamicfieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  schemas: [
    // CUSTOM_ELEMENTS_SCHEMA,
    // NO_ERRORS_SCHEMA
  ],
  providers: [FormControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
