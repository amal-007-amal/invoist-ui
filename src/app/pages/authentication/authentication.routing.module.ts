import { RouterModule, Routes } from "@angular/router";
import { AuthlayerComponent } from "./container/authlayer/authlayer.component";
import { NgModule } from "@angular/core";

const routes:Routes = [
    {
        path:'',
        component:AuthlayerComponent
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})

export class AuthenticationRoutingModule {}

