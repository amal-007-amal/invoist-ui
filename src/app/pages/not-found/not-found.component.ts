import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/const/routes';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})

export class NotFoundComponent implements OnInit {

  public routes: typeof routes = routes;

  ngOnInit() {

  }

}
