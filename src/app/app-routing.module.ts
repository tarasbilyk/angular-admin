import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminGuard } from './core/guards/super-admin.guard';
import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'users',
    loadChildren: () => import('./features/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'settings',
    canActivate: [SuperAdminGuard],
    loadChildren: () => import('./features/settings/settings.module').then((m) => m.SettingsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
