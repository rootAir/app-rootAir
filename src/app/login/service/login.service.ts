import { Injectable } from '@angular/core';
import { Validator } from 'validator.ts/Validator';
import { environment } from './../../../environments/environment.prod';
import { LoginStorageModel } from '../model/login-storage.model';
// import { HttpClient } from '@angular/common/http';
import { Response, Http, RequestOptions, Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class LoginService {

    public constructor(public http: Http) {
    }

    public autenticar(dadosEntrada: LoginStorageModel): Promise<LoginStorageModel> {
        const path = 'http://rta-finance.herokuapp.com/api-token-auth/';
        const body = {username: 'admin', password: 'wingroot'};
        
        debugger;
        return this.http.post(path, body)
            .toPromise()
            .then((response: Response) => {
                let dadosSaida = null;
                try {
                    dadosSaida = response.json();
                } catch (e) {
                    // throw this.tratarErro('O servidor se comportou de forma inesperada');
                }
                return this.tratarSaida(dadosSaida)
            }).catch((error: any) => {
                debugger;
                const erroTratado = error;
                return Promise.reject(erroTratado);
            });
    }

    public tratarSaida(login: any): Promise<LoginStorageModel> {
        debugger;
        (<any> sessionStorage).sessoesCatalogo = JSON.stringify({
            usr: {
                dataAtualizacao: new Date().getTime(),
                identificacaoSessao: {
                    token: login.token
                }
            }
        });
        // this.storage.write(ModuloEnum.LOGIN, login);
        return Promise.resolve(login);
    }
}
