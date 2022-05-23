import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserRolesEnum } from '../../enums/user-roles.enum';

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

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    
  }

  displayLink(link: string): boolean{
    if(link != 'settings') return true;
   return this.authService.getRole() == UserRolesEnum.SuperAdmin;
  }

}
