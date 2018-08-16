import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatCheckboxModule, MatGridListModule, MatListModule, MatToolbarModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import {routing} from "./app.routing";
import {HomeComponent} from "./home/home.component";
import {MystuffComponent} from "./mystuff/mystuff.component";
import {FlexLayoutModule} from "@angular/flex-layout";

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
    FlexLayoutModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatGridListModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
