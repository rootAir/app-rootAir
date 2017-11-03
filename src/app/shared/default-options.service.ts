import { RequestOptions } from '@angular/http';
import { CommonRequestOptionsService } from './service/common-request-options.service';
import { LoginStorageModel } from './model/login-storage.model';
// import { StorageIntegracaoService } from './service/storage-integration.service';


export class DefaultOptionsService extends CommonRequestOptionsService {

    public constructor(
		// private storage: StorageIntegracaoService
	) {
        super();

        const session = JSON.parse(sessionStorage.session).usr.identificacaoSessao;
		this.headers.set('Authorization', 'JWT ' + session.token);
	}
}

export const requestOptionsProvider = {
    provide: RequestOptions,
    useClass: DefaultOptionsService,
    // deps: [StorageIntegracaoService]
};
