import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsModule } from './products/products.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { httpInterceptorProviders } from './http-interceptors';

@NgModule( {
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    BrowserAnimationsModule,
    ProductsModule,
    AppRoutingModule
  ],
  providers: [ httpInterceptorProviders ],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
