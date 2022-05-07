import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './services/dashboard.service';
import { DashboardInterface } from './interfaces/dashboard-interface'
 

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardComponent,
    DashboardService,
    
  ]
})
export class DashboardModule { }
