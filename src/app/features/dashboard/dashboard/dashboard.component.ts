import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IUser } from 'src/app/shared/interfaces/user.interface';
import { ITransaction } from 'src/app/shared/interfaces/transaction.interface';
import {ChartConfiguration, ChartType} from "chart.js";
import { viewsDataMock } from 'src/testing/mocks/viewsDataMock';

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

  disableRecolor!: boolean;  

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

  public lineChartData: any = {
    datasets: [
      {
        data: viewsDataMock,
        label: 'Views per year',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0':
        {
          position: 'left',
        },
      'y-axis-1': {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red'
        }
      }
    },
    plugins: {
      legend: { display: true },
    }
  };

  public lineChartType: ChartType = 'line';

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
