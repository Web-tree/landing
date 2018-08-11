import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatCheckboxModule, MatListModule, MatToolbarModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import {routing} from "./app.routing";
import {HomeComponent} from "./home/home.component";
import {MystuffComponent} from "./mystuff/mystuff.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MystuffComponent
  ],
  imports: [
    routing,
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
