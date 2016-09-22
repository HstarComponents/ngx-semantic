import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders } from './app.routing';

import { LayoutComponent, HomeComponent } from './app';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    routing
  ],
  declarations: [LayoutComponent, HomeComponent],
  bootstrap: [LayoutComponent]
})
export class AppModule {

};