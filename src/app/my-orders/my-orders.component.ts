import { Component, DoCheck, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements DoCheck{
  iscancelEnable:Boolean=false;
  constructor(
    private router:Router,
    private route:ActivatedRoute,
  ){

  }

  ngDoCheck(): void {
    // console.log(this.route,'route')
    if(this.route.snapshot.queryParams['c'] =='true'){

      this.iscancelEnable =  true;
    }else{
      this.iscancelEnable =  false;
    }

    console.log(this.iscancelEnable,'iscancelEnable')
  }

}
