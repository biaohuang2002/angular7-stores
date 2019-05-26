import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AppComponent } from './app.component';

import { CustomMaterialModule } from './custom-material.module';
import { BreakpointService } from './breakpoint.service'
import { MatPaginatorIntl } from '@angular/material';
import { MatPaginationIntlService } from './mat-pagination-intl.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

//AoT requires an exported function for factories
import { HttpClient, HttpClientModule } from '@angular/common/http';
export function HttpLoaderFactory( httpClient: HttpClient ) {
  return new TranslateHttpLoader( httpClient );
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        CustomMaterialModule
        , RouterTestingModule
        , HttpClientTestingModule
        , TranslateModule.forRoot( {
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        } ),
      ],
      providers: [
        BreakpointService
        , { provide: MatPaginatorIntl, useClass: MatPaginationIntlService }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular7-stores'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular7-stores');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('angular7-stores');
  });
});
