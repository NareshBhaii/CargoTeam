import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  constructor(
    private builder: FormBuilder,
    private service: AuthService,
    private router: Router
  ) {

  }

  registerForm = this.builder.group({
    // id: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    username: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    password: this.builder.control('', Validators.required),
    cnfpassword: this.builder.control('', Validators.required),
    role: this.builder.control('',  Validators.required),

  })



  register() {
    if (this.registerForm.valid) {

      console.log(this.registerForm.value)
      let userData = this.registerForm.value;
      // localStorage.setItem('loginData',JSON.stringify(userData))
      this.router.navigate(['login'])
    } else {
      alert("Please fill valid details")
    }
  }



  login(){

  }

  setLoginFormType(type:string){

  }
  
}
