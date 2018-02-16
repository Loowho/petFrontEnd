import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppLocation }  from './app.location';

// This decorator describes the class that follows it
@NgModule({
  imports:      [ BrowserModule, FormsModule ], // What stuff do I need?
  declarations: [ AppLocation ],  // What's things are in my app module?
  bootstrap:    [ AppLocation ]   // Where do I start?
})
export class AppModule { }