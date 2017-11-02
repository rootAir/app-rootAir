import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
// import { BaseService } from '../../shared/service/base.service';
// import { Validator } from 'validator.ts/Validator';

// model
import { PositionOutModel } from '../model/position-out.model';
import { PositionLoadModel } from '../model/position-load.model';


let positions: PositionOutModel[] = [{
    "ID": 1,
    "nameActive": "Fun",
    "percentActive": "60%",
    "colorActive": "#ffa600",
}, {
    "ID": 2,
    "nameActive": "Task",
    "percentActive": "25%",
    "colorActive": "#88f1bc",
}, {
    "ID": 3,
    "nameActive": "Study",
    "percentActive": "10%",
    "colorActive": "#88e5f1",
}, {
    "ID": 4,
    "nameActive": "Sport",
    "percentActive": "5%",
    "colorActive": "#d3bbf5",
}];


@Injectable()
export class PositionLoadService { //extends BaseService<any, any> {

    protected path = 'api/position';

    public constructor(
        // private http: HttpClient,
        // private storage: StorageIntegracaoService
    ) {
        // super(http);
    }

    public getPositionsMock(): PositionOutModel[] {
        return positions;
    }

    // public getPositions(): Promise<PositionLoadModel> {

    //     return this.http.get(this.path)
    //         .toPromise()
    //         .then((response: Response) => {
    //             let dataOut = null;
    //             try {
    //                 dataOut = response.json() as PositionOutModel;
    //             } catch (e) {
    //                 throw new Error('O servidor se comportou de forma inesperada');
    //             }
    //             // try {
    //             //     (new Validator()).validate(dataOut);
    //             // } catch (e) {
    //             //     // throw this.cureErro({validator: e, response: response});
    //             // }

    //             return this.cureOut(dataOut);
    //         })//.catch((error: any) => Promise.reject(this.cureErro(error)));
    // }

    public cureOut(dataOut: PositionOutModel): PositionOutModel {
        return dataOut;
    }

}

