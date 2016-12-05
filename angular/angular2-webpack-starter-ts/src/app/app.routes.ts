import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { userManage } from './userManage';
import { userDetail } from './userManage/userDetail';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'userManage', component: userManage },
  { path: 'userManage/userDetail', component: userDetail },
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
      .then((comp: any) => comp.default),
  },
  { path: '**',    component: NoContentComponent },
];
