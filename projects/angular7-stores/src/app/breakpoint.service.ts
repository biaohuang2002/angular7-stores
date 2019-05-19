import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';

@Injectable( {
  providedIn: 'root'
} )
export class BreakpointService {
  private _unsubscribe$ = new Subject();
  private _breakpoints: string[] = [];

  constructor(
    private _breakpointObserver: BreakpointObserver
    , private _platform: Platform ) { }

  get isBrowser(): boolean {
    return this._platform.isBrowser && !this._platform.ANDROID && !this._platform.IOS;
  }

  get isMobile(): boolean {
    return this._platform.ANDROID || this._platform.IOS;
  }

  get breakpoints(): string[] {
    this._breakpoints = [];
    for ( let key in Breakpoints ) {
      if ( ( this.isBrowser && Breakpoints[key].indexOf( 'orientation' ) === -1 )
        || ( !this.isBrowser && Breakpoints[key].indexOf( 'orientation' ) !== -1 ) ) {
        this._breakpoints.push( Breakpoints[key] );
      }
    }
    return this._breakpoints;
  }

  breakpointSubscriber(): void {
    this._breakpointObserver.observe( this.breakpoints ).pipe(
      takeUntil( this._unsubscribe$ )
    ).subscribe( result => {
      if ( result.matches ) {
        this.activateBreakpoints( result );
      }
    } );
    console.log( this._platform );
  }

  breakpointUnsubscriber(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

  activateBreakpoints( result ): void {
    console.log( Breakpoints, result );
  }
}
