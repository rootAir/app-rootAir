import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { PositionModule } from './position/position.module';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { appRouting } from './app.routes';
// import 'reflect-metadata'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    appRouting,
    HttpModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
