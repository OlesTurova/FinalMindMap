import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HipageComponent } from './hipage/hipage.component';
import { WhatisComponent } from './whatis/whatis.component';
import { CardsComponent } from './cards/cards.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { FormsModule } from '@angular/forms';
import { EditwindowComponent } from './editwindow/editwindow.component';


@NgModule({
  declarations: [
    AppComponent,
    HipageComponent,
    WhatisComponent,
    CardsComponent,
    AboutmeComponent,
    EditwindowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

