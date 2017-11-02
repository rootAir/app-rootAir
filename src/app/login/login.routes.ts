import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';

const loginRoute: Routes = [
    {
        path: '',
        component: LoginComponent
    }
];

export const loginRouting = RouterModule.forChild(loginRoute);
