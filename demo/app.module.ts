import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders } from './app.routing';

import { Ng2SemanticComponentsModule, NG2_SEMANTIC_SERVICES } from './../';

import { LayoutComponent, ALL_COMPONENTS } from './app';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    Ng2SemanticComponentsModule,
    routing
  ],
  declarations: [LayoutComponent, ...ALL_COMPONENTS],
  providers: [...NG2_SEMANTIC_SERVICES],
  bootstrap: [LayoutComponent]
})
export class AppModule {

};