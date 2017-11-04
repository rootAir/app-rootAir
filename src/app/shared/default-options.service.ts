import { RequestOptions } from '@angular/http';
import { CommonRequestOptionsService } from './service/common-request-options.service';
import { LoginStorageModel } from './model/login-storage.model';
// import { StorageIntegracaoService } from './service/storage-integration.service';


export class DefaultOptionsService extends CommonRequestOptionsService {

    public constructor(
		// private storage: StorageIntegracaoService
	) {
        super();

        let session: string;
        if ( sessionStorage.session !== undefined ) {
            session = JSON.parse(sessionStorage.session).usr.identificacaoSessao.token;
            this.headers.set('Authorization', 'JWT ' + session);
        }
	}
}

export const requestOptionsProvider = {
    provide: RequestOptions,
    useClass: DefaultOptionsService,
    // deps: [StorageIntegracaoService]
};
