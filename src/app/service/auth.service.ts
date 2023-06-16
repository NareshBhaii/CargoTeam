import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseAPI = 'http://localhost:3000'
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.baseAPI)
  }


  isLoggedin(){
    return localStorage.getItem('loginData')!=null
  }


  getRole(){
    let data = localStorage.getItem('loginData')
    let role = ''
    if(this.isLoggedin()){ 
      role = 'admin'
      role='employee'
      // role='customer'
    }
      
    return role
  }
}
