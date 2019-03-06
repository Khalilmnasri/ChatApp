import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public loginService: LoginService, private routes: Router) {

  }

  public statu;
  public user;

  ngOnInit() {
  }
  logout() {
    this.loginService.logout();
    this.routes.navigate(['/home']);

  }
}
