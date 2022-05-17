import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ITransaction } from 'src/app/shared/interfaces/transaction.interface';
import { IUser } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DatePipe]
})
export class DashboardComponent implements OnInit {

  currentDate!: string;
  currentUser!: IUser;
  transactions: ITransaction[] = [];
  vegetables: string[] = [
    'Potato',
    'Tomato',
    'Lettuce'
  ]
  vegetablesRefCopy: string[] = [];
  vegetablesValCopy: string[] = [];
  includesA: boolean[] = [];
  isEveryMoreThanFive!: boolean;
  hasLessThanFour!: boolean;

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getDate(this.formatDate);
    this.updateUser();
    this.vegetablesRefCopy = this.vegetables;
    this.vegetablesValCopy = [...this.vegetables];
    this.vegetables[0] = 'Cucumber';
    this.includesA = this.vegetablesRefCopy.map(x => x.includes('a'));
    this.isEveryMoreThanFive = this.vegetables.every(x => x.length > 5);
    this.hasLessThanFour = this.vegetables.some(x => x.length < 4);
    this.vegetables.forEach((_, index) => this.vegetables[index] += '1');
    console.log(this.vegetables);
    this.vegetables = this.vegetables.map(el => el.replace('To', ' ').trim());
  }

  private formatDate = (date: Date) => {
    this.currentDate = `Date: ${this.datePipe.transform(date, 'MM.dd.yyyy hh:mm a')}`;
  }

  private getDate(callback: any) {
    let date = new Date();
    callback(date);
  }

  private updateUser(date: Date = new Date(), active: boolean = false){
    this.currentUser = {
      id: 0,
      name: 'user1',
      updateAt: date,
      transactions: [...this.transactions],
      active: active
    }
  }
}
