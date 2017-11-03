 import { Component, OnInit } from '@angular/core';

// model
import { PositionModel } from './model/position.model';

 // service
import { PositionLoadService } from './service/position-load.service';
import { DetailsPositionService } from './service/details-position.service';


// if(!/localhost/.test(document.location.host)) {
//     enableProdMode();
// }

@Component({
    selector: 'app-position',
    templateUrl: './position.component.html',
    // styleUrls: ['./position.component.css'],
    styleUrls: ['./position.component.less'],
    providers: [PositionLoadService, DetailsPositionService]
})
export class PositionComponent implements OnInit { 
    title = 'Position';
    public positionLoad: Array<PositionModel> = new Array<PositionModel>();
    // public positionLoad: PositionModel = new PositionModel;
    nameActive: string;
    percentActive: string;
    colorActive: string;
    detailsPosition: any;

    constructor(private positionLoadService: PositionLoadService,
                private detailsPositionService: DetailsPositionService) {
    }

    public ngOnInit(): void {
        // this.positionLoadService.load().then((dataOut: PositionModel) => {
        //     this.positionLoad = dataOut;
        // }).catch((e) => {
        //     // this.erros = e;
        //     throw new Error('dados nao carregados.');
        // });
        this.positionLoad = this.positionLoadService.getPositionsMock();
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