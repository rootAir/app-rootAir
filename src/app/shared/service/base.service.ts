// import { TrataErroService } from './trata-erro.service';
import { Response } from '@angular/http';
import { BaseHttpService } from './base-http.service';

// models
// import { DadosTelaModel } from '../dados-tela.model';
// import { ErroUsuarioModel } from '../model/erro-usuario.model';


export abstract class BaseService<EntidadeEntrada extends Object, EntidadeSaida extends Object> {

    protected abstract path: string;

    // protected trataErro: TrataErroService;

    public constructor(protected http: BaseHttpService) {
        // this.trataErro = new TrataErroService();
    }

    // protected tratarErro(error: any): ErroUsuarioModel {
    //     // return this.trataErro.tratarErro(error);
    // }
}
