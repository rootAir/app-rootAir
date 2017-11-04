 import { Component, OnInit } from '@angular/core';

// model
import { PositionModel } from './model/position.model';

 // service
import { PositionLoadService } from './service/position-load.service';
import { DetailsPositionService } from './service/details-position.service';
// import { DataTableResource } from '../../../node_modules/data-table';
import { DataTableResource } from 'data-table';
import persons from './data-table-demo1-data';

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
    nameActive: string;
    percentActive: string;
    colorActive: string;
    detailsPosition: any;
    dataSource: any;
    itemResource = new DataTableResource(persons);
    items = [];
    itemCount = 0;

    constructor(private positionLoadService: PositionLoadService,
                private detailsPositionService: DetailsPositionService) {
        this.dataSource = {
            store: {
                type: 'array',
                key: 'key',
                data: this.positionLoad
            }
        }
    }

    public ngOnInit(): void {
        this.positionLoadService.load().then((dataOut: Array<PositionModel>) => {
            debugger;
            this.positionLoad = dataOut;
        }).catch((e) => {
            // this.erros = e;
            throw new Error('dados nao carregados.');
        });
    }

    completedValue(rowData) {
        return rowData.Status == "Completed";
    }

}