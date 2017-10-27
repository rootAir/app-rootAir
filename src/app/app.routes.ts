import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'test', loadChildren: './position/position.module#PositionModule' },

//   { path: '', redirectTo: 'pages', pathMatch: 'full' },
//   { path: '**', redirectTo: 'pages' },
];


export const appRouting = RouterModule.forRoot(routes, { useHash: true });
