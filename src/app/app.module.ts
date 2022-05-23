import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DashboardComponent} from './features/dashboard/dashboard/dashboard.component';
import { MaterialModule } from './material/material.module';
import { NgChartsModule  } from 'ng2-charts';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { CurrentSettingsComponent } from './features/dashboard/dashboard/components/current-settings/current-settings.component';
import { LastTransactionsComponent } from './features/dashboard/dashboard/components/last-transactions/last-transactions.component';
import { RecentlyAddedUsersComponent } from './features/dashboard/dashboard/components/recently-added-users/recently-added-users.component';
import { VisitorsChartComponent } from './features/dashboard/dashboard/components/visitors-chart/visitors-chart.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    CurrentSettingsComponent,
    LastTransactionsComponent,
    RecentlyAddedUsersComponent,
    VisitorsChartComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
