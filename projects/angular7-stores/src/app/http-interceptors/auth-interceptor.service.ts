import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders
} from '@angular/common/http';

import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor( private auth: AuthService ) { }

  intercept( req: HttpRequest<any>, next: HttpHandler ) {
    // Get the auth token from the service.
    const authToken = this.auth.getAuthorizationToken();

    // HttpHeaders.append returns a clone of the headers with the value appened, it does not update the object. 
    // You need to set the returned value to the headers.
    let headers = req.headers.append( 'Authorization', 'Bearer ' + authToken );
    headers = headers.append( 'X-App-Request', 'true' );

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone( {
      headers: headers
    } );

    // send cloned request with header to the next handler.
    return next.handle( authReq );
  }
}