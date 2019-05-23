import { Component, OnDestroy, OnInit } from '@angular/core';

import { BreakpointService } from './breakpoint.service'

import {TranslateService, LangChangeEvent} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular7-stores';
  
  constructor(public _breakpointService: BreakpointService, public translate: TranslateService) {
    this._breakpointService.breakpointSubscriber();

    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
  
  ngOnInit() {
    this.translate.get('HOME.TITLE').subscribe((res: string) => {
      console.log(res);
    });
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log(event);
    });
  }
  
  ngOnDestroy() {
    this._breakpointService.breakpointUnsubscriber();
  }

}
