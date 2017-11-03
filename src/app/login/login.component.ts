import { RequestOptions } from '@angular/http';
import { Component, OnInit, ViewChildren, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './service/login.service';
import { environment } from './../../environments/environment';
import { LoginStorageModel } from './model/login-storage.model';
import { LoginLoadModel } from './model/login-load.model';


@Component({
    selector: 'ng-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {

    public dataIn: LoginLoadModel = new LoginLoadModel();
    // public errosLogin: ErroUsuarioModel = new ErroUsuarioModel();

    /**
     * URL padrão para qual o usuário será redirecionado após o login
     */
    public destinoAposLogin: string = 'position';

    constructor(
        // private storage: StorageIntegracaoService,
        public router: Router,
        private defaultOptions: RequestOptions,
        public login: LoginService) {
    }

    ngOnInit() {
    }

    /**
     * Foca o campo 'Empresa' ao carregar a página (o 'autofocus' não funciona...)
     *
     * Referência:
     * http://stackoverflow.com/questions/35790021/angular2-focusing-a-textbox-on-component-load/35793177#35793177
     */
    // @ViewChildren('inputEmpresa') inputEmpresa;

    ngAfterViewInit() {
        // this.inputEmpresa.first.nativeElement.focus();
    }

    /**
     * Submete o formulário dos dados de login
     */
    public efetuarLogin() {
        // debugger;
        this.login.autenticar(this.dataIn).then((autenticado: LoginStorageModel) => {
            this.router.navigate([this.destinoAposLogin]);
        }).catch((err) => {
            // this.errosLogin = err;
        });
    }
}
