import { Component, OnDestroy, OnInit } from '@angular/core';

import { BreakpointService } from './breakpoint.service'
import { MatPaginationIntlService } from './mat-pagination-intl.service';

import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular7-stores';
  translate;
  
  constructor(public _breakpointService: BreakpointService, public matPaginationIntlService: MatPaginationIntlService) {
    this._breakpointService.breakpointSubscriber();
    this.translate = matPaginationIntlService.translate;
  }
  
  ngOnInit() {
    //emits values of any type
    const source = of(null, undefined, { name: 'Brian' }, [1, 2, 3], function hello() {
      return 'Hello';
    });
    //output: {name: 'Brian}, [1,2,3], function hello() { return 'Hello' }
    const subscribe = source.subscribe(val => console.log(val));
  }
  
  ngOnDestroy() {
    this._breakpointService.breakpointUnsubscriber();
  }

}
