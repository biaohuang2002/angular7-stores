import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsModule } from './products/products.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { httpInterceptorProviders } from './http-interceptors';
import { CustomMaterialModule } from './custom-material.module';

import { MatPaginatorIntl } from '@angular/material';
import { MatPaginationIntlService } from './mat-pagination-intl.service';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

//AoT requires an exported function for factories
export function HttpLoaderFactory( httpClient: HttpClient ) {
  return new TranslateHttpLoader( httpClient, '../assets/i18n/', '.json' );
}

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
    TranslateModule.forRoot( {
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ]
      }
    } ),
    ProductsModule,
    CustomMaterialModule,
    AppRoutingModule
  ],
  providers: [
    httpInterceptorProviders,
    { provide: MatPaginatorIntl, useClass: MatPaginationIntlService }
  ],
  bootstrap: [
    AppComponent
  ]
} )
export class AppModule { }
