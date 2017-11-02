import { loginRouting } from './login.routes';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// import { UtilsModule } from './../carrinho/shared/utils.module';
import { LoginService } from './service/login.service';
import { LoginComponent } from './login.component';

@NgModule({
    declarations: [
        LoginComponent
    ],

    imports: [
        // UtilsModule,
        FormsModule,
        CommonModule,
        loginRouting
    ],

    exports: [
        LoginComponent
    ],

    providers: [
        LoginService
    ]

})
export class LoginModule {

}
