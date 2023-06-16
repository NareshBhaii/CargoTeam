import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements DoCheck {
  title = 'CargoTeam';
  islogin:Boolean = false;
  menuType:string = '';
  constructor(
    private router: Router,
    private service: AuthService,
  ) {


    this.islogin = this.service.isLoggedin()
  }

  ngDoCheck(): void {
    this.islogin = this.service.isLoggedin()
    this.menuType = this.service.getRole()
  }

  


  handleLogout(){
    localStorage.clear()
    this.router.navigate(['login'])
  }

  year = new Date().getFullYear()

}
