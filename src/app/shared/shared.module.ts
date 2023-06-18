import { NgModule } from "@angular/core";
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { UIMaterialModule } from "../UIMaterial/ui-material.module";

@NgModule({
    declarations:[
    SidebarComponent,
    NavbarComponent,
    HeaderComponent,
    LayoutComponent
  ],
    imports:[
      UIMaterialModule
    ],
    exports:[]
})

export class SharedModule{}