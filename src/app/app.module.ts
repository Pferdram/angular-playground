import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';


import { AppComponent } from './app.component';
import { MaterialWrapperModule } from './material-wrapper/material-wrapper.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialWrapperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
