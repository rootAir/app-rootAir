import { Optional, Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, XHRBackend, RequestOptionsArgs } from '@angular/http';
import { EnvironmentBase } from '../../../environments/environment';
// import { loadingService } from '../service/loading.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BaseHttpService extends Http {

    public static environment: EnvironmentBase = null;

    public constructor(_backend: XHRBackend, @Optional() _defaultOptions?: RequestOptions) {
        super(_backend, _defaultOptions);
    }

    // public request(url: string, options?: RequestOptionsArgs): Observable<Response> {
    //     const hash = loadingService.iniciar();
    //     const observable: Observable<Response> = super.request(url, options);
    //     const promise = observable.toPromise();

    //     //  gambiarra maligna
    //     observable.toPromise = () => {
    //         return promise.then((response: Response) => {
    //             loadingService.finalizar(hash);
    //             return Promise.resolve(response);
    //         }).catch((erro) => {
    //             loadingService.finalizar(hash);
    //             return Promise.reject(erro);
    //         });
    //     };
    //     return observable;
    // }

    /**
     * @param {path}
     * Nome do rest a ser consumido
     */
    public createPath(path: string) {
        return `${BaseHttpService.environment.server}${BaseHttpService.environment.basePath}${path}`;
    }
}
