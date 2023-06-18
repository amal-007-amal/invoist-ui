import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UIMaterialModule } from "src/app/UIMaterial/ui-material.module";
import { LoginComponent } from "./components/login/login.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { RouterModule } from "@angular/router";
import { AuthlayerComponent } from "./container/authlayer/authlayer.component";
import { AuthenticationRoutingModule } from "./authentication.routing.module";

@NgModule({
    declarations:[
        AuthlayerComponent,
        LoginComponent,
        SignUpComponent
    ],
    imports:[
        UIMaterialModule,
        AuthenticationRoutingModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers:[]
})

export class AuthenticationModule{}