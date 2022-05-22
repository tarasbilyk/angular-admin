import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './services/dashboard.service';
import { DashboardInterface } from './interfaces/dashboard-interface'
import { BrowserModule } from '@angular/platform-browser';
 

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DashboardComponent,
    DashboardService,
  ]
})
export class DashboardModule { }
