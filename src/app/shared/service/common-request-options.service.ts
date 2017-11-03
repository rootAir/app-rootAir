import { Injectable } from '@angular/core';
import { BaseRequestOptions, RequestOptions } from '@angular/http';

@Injectable()
export class CommonRequestOptionsService extends BaseRequestOptions {

    constructor() {
        super();
        
        this.headers.set('Content-Type', 'application/json');
        this.headers.set('Accept', 'application/json');
        this.headers.set('Access-Control-Allow-Origin', '*');
    }
}
