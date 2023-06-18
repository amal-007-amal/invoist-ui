import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UIMaterialModule } from "src/app/UIMaterial/ui-material.module";
import { LoginComponent } from "./components/login/login.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations:[
        LoginComponent,
        SignUpComponent
    ],
    imports:[
        UIMaterialModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers:[],
    exports:[RouterModule]
})

export class AuthenticationModule{}