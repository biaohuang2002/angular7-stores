import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError, empty, of } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable( {
  providedIn: 'root'
} )
export class ProductService {
  productListings = {};
  
  responseData;
  
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
    if ( +queryParams["page-size"] === this.productListings["pageSize"] 
     && +queryParams["page-index"] === this.productListings["pageIndex"] ) {
      console.log('old responseData');
      return this.responseData ? of(this.responseData) : empty();
     }
    
    this.productListings["items"] = [];
    this.productListings["pageSize"] = +queryParams["page-size"] === 0 ? +queryParams["page-size"] : +queryParams["page-size"] || this.productListings["pageSize"] || 36;
    this.productListings["pageIndex"] = +queryParams["page-index"] === 0 ? +queryParams["page-index"] : +queryParams["page-index"] || this.productListings["pageIndex"] || 0;
    
    return this.http.get(`/products/product-listings?page-size=${this.productListings["pageSize"]}&page-index=${this.productListings["pageIndex"]}`, { observe: 'response' } ).pipe(
      map( (data) => {
        this.responseData = data;
        return this.responseData;
      } )
    );
  }

}
