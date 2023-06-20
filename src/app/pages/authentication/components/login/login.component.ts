import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
hide: any;

  /**
   *
   */
  constructor(
    private toasterService:ToasterService
  ) {}

  ngOnInit() {

  }

  onLogin(){
    this.toasterService.success("Login Successful")
  }

}
