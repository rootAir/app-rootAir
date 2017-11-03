import { Injectable } from '@angular/core';
import { Validator } from 'validator.ts/Validator';
import { Response, Http, RequestOptions, Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// model 
import { LoginStorageModel } from '../model/login-storage.model';
import { LoginLoadModel } from '../model/login-load.model';

// services
import { BaseHttpService } from '../../shared/service/http';
import { BaseService } from '../../shared/service/base.service';


@Injectable()
export class LoginService extends BaseService<LoginStorageModel, LoginStorageModel> {

    protected path = 'api-token-auth/';

    public constructor(http: BaseHttpService) {
        super(http);
    }

    public autenticar(dataIn: LoginLoadModel): Promise<LoginStorageModel> {
        const path: string = this.http.createPath(this.path);
        
        return this.http.post(path, dataIn)
            .toPromise()
            .then((response: Response) => {
                let dataOut = null;
                try {
                    dataOut = response.json() as LoginStorageModel;
                } catch (e) {
                    // throw this.tratarErro('O servidor se comportou de forma inesperada');
                }
                return this.cureOut(dataOut)
            }).catch((error: any) => {
                const erroTratado = error;
                return Promise.reject(erroTratado);
            });
    }

    public cureOut(dataOut: LoginStorageModel): Promise<LoginStorageModel> {
        const outCure: LoginStorageModel = new LoginStorageModel();
        (<any> sessionStorage).session = JSON.stringify({
            usr: {
                dataAtualizacao: new Date().getTime(),
                identificacaoSessao: {
                    token: dataOut.token
                }
            }
        });
        // this.storage.write(ModuloEnum.LOGIN, login);
        outCure.ip = '';
        outCure.username = dataOut.username;

        return Promise.resolve(outCure);
    }
}
