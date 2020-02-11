import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'khalil'
  passeword = ''
  errorMessage = 'Invalid Credential'
  inValidLogin = false

  constructor( private router : Router){}

  ngOnInit(): void {
  }

  handleLogin() {
    if (this.username === 'khalil' && this.passeword === 'dummy') {
      this.router.navigate(['welcome',this.username])
      this.inValidLogin = false
    } else {

      this.inValidLogin = true
    }
  }

}
