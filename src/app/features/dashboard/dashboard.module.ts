import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './services/dashboard.service';
import { DashboardInterface } from './interfaces/dashboard-interface'
import { BrowserModule } from '@angular/platform-browser';
import { VisitorsChartComponent } from './dashboard/components/visitors-chart/visitors-chart.component';
import { CurrentSettingsComponent } from './dashboard/components/current-settings/current-settings.component';
import { RecentlyAddedUsersComponent } from './dashboard/components/recently-added-users/recently-added-users.component';
import { LastTransactionsComponent } from './dashboard/components/last-transactions/last-transactions.component';
import { RouterModule, Routes } from '@angular/router';
 
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    VisitorsChartComponent,
    RecentlyAddedUsersComponent,
    LastTransactionsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DashboardComponent,
    DashboardService,
    RouterModule.forChild(routes),
  ]
})
export class DashboardModule { }
