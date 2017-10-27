 import { Component } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { DxAccordionModule, DxCheckBoxModule, DxSliderModule, DxTagBoxModule, DxTemplateModule } from 'devextreme-angular';

import { Company, Service } from './position.service';

// if(!/localhost/.test(document.location.host)) {
//     enableProdMode();
// }

@Component({
    selector: 'demo-app',
    templateUrl: './position.component.html',
    styleUrls: ['./position.component.css'],
    // providers: [Service]
})
export class PositionComponent {
    companies: Company[];

    debugger;
    constructor(service: Service) {
        debugger;
        this.companies = service.getCompanies();
    }
}