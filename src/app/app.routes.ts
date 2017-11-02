import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PositionComponent } from './position/position.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'position',
    component: PositionComponent,
  },
  {
    path: '',
    loadChildren: './login/login.module#LoginModule'
  }
    // path: '',
    // component: AppComponent,
    // children: [{
    //   path: 'test',
    //   component: PositionComponent,
    // }]

    //   path: 'ui-features',
    //   loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
    // }, {
    //   path: '',
    //   redirectTo: 'dashboard',
    //   pathMatch: 'full',
  // }
];

const config: ExtraOptions = {
  useHash: true,
};
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class appRouting {
}
