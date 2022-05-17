import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: UsersComponent,
  }
];

@NgModule({
  declarations: [
    UsersComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class UsersModule { }
