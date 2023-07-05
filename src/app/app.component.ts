import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Web-Shoes';

  constructor(private location: Location) { }
  isInAdminRoute(): boolean {
    return this.location.path().includes('/admin');
  }
  isInLoginRoute(): boolean {
    return this.location.path().includes('/login');
  }
  isInRegisterRoute(): boolean {
    return this.location.path().includes('/register');
  }
}
