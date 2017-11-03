import { DefaultOptionsService } from './../../shared/default-options.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response, RequestOptions } from '@angular/http';
import { Validator } from 'validator.ts/Validator';

// model
import { PositionLoadOutModel } from '../model/position-load-out.model';
import { PositionLoadInModel } from '../model/position-load-in.model';
import { PositionModel } from '../model/position.model';

// service
import { LoadService } from '../../shared/service/load.service';
import { BaseService } from '../../shared/service/base.service';
import { BaseHttpService } from '../../shared/service/http';


@Injectable()
export class PositionLoadService extends LoadService<PositionLoadInModel, PositionLoadOutModel> {

    protected path = 'api/provider';

    public constructor(http: BaseHttpService) {
        super(http);
    }

    public load(): Promise<PositionModel> {
        const path: string = this.http.createPath(this.path);
  
        return this.http.get(path)
            .toPromise()
            .then((response: Response) => {
                let dataOut = null;
                try {
                    dataOut = response.json() as PositionLoadOutModel;
                } catch (e) {
                    throw new Error('O servidor se comportou de forma inesperada');
                }
                try {
                    (new Validator()).validate(dataOut);
                } catch (e) {
                    // throw this.cureErro({validator: e, response: response});
                }

                return this.cureOut(dataOut);
            })//.catch((error: any) => Promise.reject(this.cureErro(error)));
    }

    public cureOut(dataOut: PositionLoadOutModel): PositionModel {
        return dataOut;
    }

    public getPositionsMock(): PositionLoadOutModel[] {
        return positions;
    }
}

let positions: PositionLoadOutModel[] = [{
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