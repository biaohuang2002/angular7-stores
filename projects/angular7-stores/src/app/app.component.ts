import { Component, OnDestroy, OnInit } from '@angular/core';

import { BreakpointService } from './breakpoint.service'
import { MatPaginationIntlService } from './mat-pagination-intl.service';

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
  }
  
  ngOnDestroy() {
    this._breakpointService.breakpointUnsubscriber();
  }

}
