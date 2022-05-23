import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  links: string[] = [
    'dashboard',
    'users',
    'settings'
  ]

  constructor() { }

  ngOnInit(): void {
    
  }

}
