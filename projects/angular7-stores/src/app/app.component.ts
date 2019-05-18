import { Component } from '@angular/core';

import { BreakpointService } from './breakpoint.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular7-stores';
  
  constructor(private _breakpointService: BreakpointService) {
    this._breakpointService.breakpointSubscriber();
  }

  ngOnDestroy() {
    this._breakpointService.breakpointUnsubscriber();
  }

}
