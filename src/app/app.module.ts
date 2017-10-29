import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DxButtonModule, 
  DxAccordionModule, 
  DxCheckBoxModule, 
  DxSliderModule, 
  DxTagBoxModule, 
  DxTemplateModule, 
  DxDataGridModule
  } from 'devextreme-angular';
// import { PositionModule } from './position/position.module';

import { APP_BASE_HREF } from '@angular/common';
import { appRouting } from './app.routes';

// component 
import { PositionComponent } from './position/position.component';
import { MenuComponent } from './menu/menu.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    PositionComponent,
    MenuComponent
  ],
  imports: [
    appRouting,
    HttpModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,

		DxButtonModule,
		DxAccordionModule,
		DxCheckBoxModule,
		DxSliderModule,
		DxTagBoxModule,
    DxTemplateModule,
    DxDataGridModule,
    DxTemplateModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
