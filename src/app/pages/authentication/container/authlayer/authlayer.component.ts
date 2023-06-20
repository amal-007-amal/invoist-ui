import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/const/routes';

@Component({
  selector: 'app-authlayer',
  templateUrl: './authlayer.component.html',
  styleUrls: ['./authlayer.component.css']
})
export class AuthlayerComponent implements OnInit {

  /**
   * routes data
   */
  routers: typeof routes = routes;

  constructor(
    private router:Router
  ) {}
 

  ngOnInit(){
  }

  sendLoginForm() {
    this.router.navigate([this.routers.DASHBOARD]).then();
  }

  sendSignForm() {
    this.router.navigate([this.routers.DASHBOARD]).then();
  }

}
