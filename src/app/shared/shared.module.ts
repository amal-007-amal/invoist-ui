import { NgModule } from "@angular/core";
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { UIMaterialModule } from "../UIMaterial/ui-material.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations:[
    SidebarComponent,
    NavbarComponent,
    HeaderComponent,
    LayoutComponent
  ],
    imports:[
      CommonModule,
      RouterModule,
      UIMaterialModule
    ],
    exports:[
      SidebarComponent,
      LayoutComponent,
      HeaderComponent,
    ]
})

export class SharedModule{}