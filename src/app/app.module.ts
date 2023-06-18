import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UIMaterialModule } from './UIMaterial/ui-material.module';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { AuthenticationModule } from './pages/authentication/authentication.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DashboardModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    UIMaterialModule,
    SharedModule,
    AuthenticationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
