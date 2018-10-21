import {Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { PageNotFound } from './pageNotFound/pageNotFound.component';

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'pageNotFound', component: PageNotFound},
  {path: '**', component: PageNotFound}
];
