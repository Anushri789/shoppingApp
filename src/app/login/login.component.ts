import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {AppService} from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username;
  password;
  invalidLogin = false;

  constructor(private router: Router,
              private service: AppService,
              private authService: AuthenticationService) {
  }

  ngOnInit() {
    if (this.service.checkLogin()) {
      this.router.navigate(['home']);
    }
  }
  login() {
   (this.authService.authenticate(this.username, this.password).subscribe(
          data => {
            this.service.isLoggedIn(true);
            this.router.navigate(['home']);
            this.invalidLogin = false;
          }
        )
      );
   if (this.invalidLogin == true) {
     alert('Incorrect email or password');
   } else {
   alert('Welcome to Alomos, ' + this.username);
   }
    }
    logout() {
    this.service.isLoggedIn(false);
    this.router.navigate(['login']);
  }
  }
