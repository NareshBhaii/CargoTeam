import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private builder: FormBuilder,
    private servise: AuthService,
    private router: Router
  ) {
    localStorage.clear()
  }

  loginForm = this.builder.group({
    username: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
  })


  login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
      let userData = this.loginForm.value
      localStorage.setItem('loginData',JSON.stringify(userData))

      let role = 'admin'
      // role = 'employee';
      // role = 'customer'

      this.router.navigate(['/'])

      // if (role == 'admin') {
      //   this.router.navigate(['/admin'])
      // }
      // else if (role == 'employee') {
      //   this.router.navigate(['/employee'])
      // }
      // else if (role == 'customer') {
      //   this.router.navigate(['/customer'])
      // }
      // this.router.navigate(['login'])
    } else {
      alert("Please fill valid details")
    }
  }


}
