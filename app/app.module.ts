import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HttpClientModule } from '@angular/common/http';  //import http client. Used to get data from app.

// This decorator describes the class that follows it
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ], // What stuff do I need?
  declarations: [ AppComponent ],  // What's things are in my app module?
  bootstrap:    [ AppComponent ]   // Where do I start?
})
export class AppModule { }
