import { Component } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _unsubscribe$ = new Subject();
  title = 'angular7-stores';
  
  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
    .observe(Object.values(Breakpoints)).pipe(
      takeUntil( this._unsubscribe$ )
    ).subscribe(result => {
      if (result.matches) {
        this.activateHandsetLayout(result);
      }
    });
  }

  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

  activateHandsetLayout(result) {
    console.log(Breakpoints, result);
  }
}
