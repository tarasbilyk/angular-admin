import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { TransactionDetailsComponent } from './components/transaction-details/transaction-details.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
  {
    path: ':id',
    component: UserDetailsComponent,
  },
  {
    path: 'transactions',
    component: TransactionsComponent,
  },
  {
    path: 'transactions/:id',
    component: TransactionDetailsComponent,
  },
  {
    path: 'user',
    component: EditUserComponent,
  },
  {
    path: 'user/:id',
    component: EditUserComponent,
  },
];

@NgModule({
  declarations: [
    UsersComponent,
    EditUserComponent,
    TransactionDetailsComponent,
    TransactionsComponent,
    UserDetailsComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class UsersModule { }
