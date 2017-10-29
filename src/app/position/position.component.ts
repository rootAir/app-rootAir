 import { Component, OnInit } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { DxAccordionModule, DxCheckBoxModule, DxSliderModule, DxTagBoxModule, DxTemplateModule } from 'devextreme-angular';

import { Position, PositionService } from './service/position.service';
import { DetailsPositionService } from './service/details-position.service';

// if(!/localhost/.test(document.location.host)) {
//     enableProdMode();
// }

@Component({
    selector: 'app-position',
    templateUrl: './position.component.html',
    // styleUrls: ['./position.component.css'],
    styleUrls: ['./position.component.less'],
    providers: [PositionService, DetailsPositionService]
})
export class PositionComponent implements OnInit { 
    title = 'Position';
    positions: Position[];
    nameActive: string;
    percentActive: string;
    colorActive: string;
    detailsPosition: any;

    ngOnInit(): void {  
    }

    constructor(
        private positionService: PositionService,
        private detailsPositionService: DetailsPositionService
    ) {
        this.positions = this.positionService.getPositions();
        this.detailsPosition = {
            store: {
                type: 'array',
                key: 'ID',
                data: this.detailsPositionService.getEmployees()
            }
        }
    }

    completedValue(rowData) {
        return rowData.Status == "Completed";
    }

}