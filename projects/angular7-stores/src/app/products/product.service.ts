import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Config } from './config.interface';

@Injectable( {
  providedIn: 'root'
} )
export class ProductService {
  productListings = {};
  
  constructor( public http: HttpClient ) { }

  private handleError( error: HttpErrorResponse ) {
    if ( error.error instanceof ErrorEvent ) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error( 'An error occurred:', error.error.message );
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}` );
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.' );
  };

  getProductListings(queryParams) {
    this.productListings["items"] = [];
    this.productListings["pageSize"] = +queryParams["page-size"] || this.productListings["pageSize"] || 36;
    this.productListings["pageIndex"] = +queryParams["page-index"] || this.productListings["pageIndex"] || 0;
    
    return this.http.get(`/products/product-listings?page-size=${this.productListings["pageSize"]}&page-index=${this.productListings["pageIndex"]}`, { observe: 'response' } );
  }

}
