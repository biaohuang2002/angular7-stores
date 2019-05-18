import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {
  private _unsubscribe$ = new Subject();

  constructor(private _breakpointObserver: BreakpointObserver) { }
  
  breakpointSubscriber() {
    this._breakpointObserver
    .observe(Object.values(Breakpoints)).pipe(
      takeUntil( this._unsubscribe$ )
    ).subscribe(result => {
      if (result.matches) {
        this.activateHandsetLayout(result);
      }
    });
  }

  breakpointUnsubscriber() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
  
  activateHandsetLayout(result) {
    console.log(Breakpoints, result);
  }
}
