// import { TelaEnum } from '../carrinho/shared/enum/etapas.enum';
// import { MotorService } from './../carrinho/shared/service/motor.service';
// import { FinanceDefaultOptionsService } from './../finance/shared/finance-default-options.service';
import { RequestOptions } from '@angular/http';
import { Component, OnInit, ViewChildren, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './service/login.service';
// import { ErroUsuarioModel } from './../carrinho/shared/model/erro-usuario.model';
import { environment } from './../../environments/environment';
import { LoginStorageModel } from './model/login-storage.model';
import { LoginLoadModel } from './model/login-load.model';


// import {
//     ModuloEnum,
//     StorageIntegracaoService,
//     LoginStorageModel,
//     LoginStorageFilialModel,
//     LoginStorageFuncionarioModel
// } from 's5-webvendas-core-ng2';

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
        // private motor: MotorService,
        public login: LoginService
    ) {

    }

    ngOnInit() {
        // this.destinoAposLogin = this.motor.gerarPath(TelaEnum.INICIO_ESTEIRA_PREVENDA);
        // this.dadosEntrada = JSON.parse(localStorage.getItem('login-que-digitaram-antes'));
        // if (!this.dadosEntrada) {
        //     this.dadosEntrada = new LoginStorageModel();
        // }

        // this.destinoAposLogin = this.motor.gerarPath(TelaEnum.SISTEMAS);
        // this.storage.on(ModuloEnum.CATALOGO, 'redirecionar', () => {
        //     this.destinoAposLogin = environment.catalogoPath;
        // });

        // this.storage.on(ModuloEnum.MOBILE_TRADEIN, 'redirecionar', () => {
        //     this.destinoAposLogin = '';
        // });

        // this.storage.on(ModuloEnum.MOBILE_INTEGRACAO_OPERADORAS, 'redirecionar', () => {
        //     this.destinoAposLogin = '';
        // });

        // this.storage.on(ModuloEnum.SERVICOS, 'redirecionar', () => {
        //     this.destinoAposLogin = '';
        // });

        // this.storage.on(ModuloEnum.LISTAGEM_DOCUMENTOS, 'redirecionar', () => {
        //     this.destinoAposLogin = '';
        // });
    }

    /**
     * Foca o campo 'Empresa' ao carregar a página (o 'autofocus' não funciona...)
     *
     * Referência:
     * http://stackoverflow.com/questions/35790021/angular2-focusing-a-textbox-on-component-load/35793177#35793177
     */
    @ViewChildren('inputEmpresa') inputEmpresa;

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
