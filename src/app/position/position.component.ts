 import { Component, OnInit } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { DxAccordionModule, DxCheckBoxModule, DxSliderModule, DxTagBoxModule, DxTemplateModule } from 'devextreme-angular';

import { Position, Service } from './position.service';

// if(!/localhost/.test(document.location.host)) {
//     enableProdMode();
// }

@Component({
    selector: 'app-position',
    templateUrl: './position.component.html',
    styleUrls: ['./position.component.css'],
    providers: [Service]
})
export class PositionComponent implements OnInit { 
    title = 'Position';
    positions: Position[];
    nameActive: string;
    percentActive: string;
    colorActive: string;

    ngOnInit(): void {  
    }

    constructor(service: Service) {
        this.positions = service.getPositions();
    }
}