import { Service } from './position.service';
import { NgModule } from '@angular/core';

// import {  } from 'devextreme-angular';
import { PositionComponent } from './position.component';
import { FormsModule } from '@angular/forms';
import { DxButtonModule, 
DxAccordionModule, 
DxCheckBoxModule, 
DxSliderModule, 
DxTagBoxModule, 
DxTemplateModule 
} from 'devextreme-angular';
// import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
		PositionComponent,
  ],
  imports: [
		// BrowserModule,
		DxButtonModule,
		DxAccordionModule,
		DxCheckBoxModule,
		DxSliderModule,
		DxTagBoxModule,
		DxTemplateModule,
		// FormsModule,
		// Service
  ],
  		providers: [Service],
		bootstrap: [PositionComponent]
})


export class PositionModule { }


