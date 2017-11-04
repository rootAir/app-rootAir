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
import { GroupByPipe } from '../../shared/pipe/group-pipe';


@Injectable()
export class PositionLoadService extends LoadService<PositionLoadInModel, PositionLoadOutModel> {

    protected path = 'api/provider';

    public constructor(http: BaseHttpService) {
        super(http);
    }

    public load(): Promise<Array<PositionModel>> {
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

    public cureOut(dataOut: Array<PositionLoadOutModel>): Array<PositionModel> {
        // debugger;
        let outCure: Array<PositionModel> = new Array<PositionModel>();
        outCure = GroupByPipe.prototype.transform(dataOut, 'type_launch');
        
        // outCure.forEach((provider) => {
        //     const outCuring: PositionModel = new PositionModel();
        //     outCuring.id = provider.id;
        //     outCuring.type_launch = provider.type_launch;
        //     outCuring.description = provider.description;
        //     outCuring.date_last_purchase = provider.date_last_purchase;
        //     outCuring.total_debit_week = provider.total_debit_week;
        //     outCuring.total_credit_week = provider.total_credit_week;
        //     outCuring.total_apportionment = provider.total_apportionment;
        //     outCuring.synchronized = provider.synchronized;
        //     outCuring.observation = provider.observation;
        //     outCuring.reminder = provider.reminder;
        //     outCuring.author = provider.author;
        //     outCure.push(outCuring)
        // });

        return outCure;
    }
}