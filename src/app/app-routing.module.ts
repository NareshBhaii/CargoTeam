import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { CityComponent } from './city/city.component';
import { PriceCalculatorComponent } from './price-calculator/price-calculator.component';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AuthGuard } from './guard/auth.guard';
import { CargobookComponent } from './cargobook/cargobook.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { EmployeeComponent } from './employee/employee.component';
import { CargoComponent } from './cargo/cargo.component';
import { RegisterRequestComponent } from './register-request/register-request.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  {path:'' , component:HomeComponent , canActivate:[AuthGuard]},
  {path:'register' , component:RegisterComponent },
  {path:'login' , component:LoginComponent },
  {path:'user' , component:UserlistingComponent,canActivate:[AuthGuard] },
  {path:'city' , component:CityComponent},
  {path:'cargoPrice' , component:PriceCalculatorComponent},
  {path:'customer' , component:CustomerhomeComponent , canActivate:[AuthGuard]},
  {path:'my-profile' , component:CustomerhomeComponent , canActivate:[AuthGuard]},
  {path:'admin' , component:AdminhomeComponent , canActivate:[AuthGuard]},
  {path:'cargo-booking' , component:CargobookComponent , canActivate:[AuthGuard]},
  {path:'my-orders' , component:MyOrdersComponent ,data:{cancel:'true'}, canActivate:[AuthGuard]},
  {path:'employee' , component:EmployeeComponent , canActivate:[AuthGuard]}, // admin
  {path:'cargo' , component:CargoComponent , canActivate:[AuthGuard]}, // admin
  {path:'register-request', component:RegisterRequestComponent , canActivate:[AuthGuard]}, // admin
  {path:'customers', component:CustomersComponent , canActivate:[AuthGuard]}, // admin | employee

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
