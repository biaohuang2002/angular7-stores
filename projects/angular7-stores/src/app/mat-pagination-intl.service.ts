import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material';

import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Injectable( {
  providedIn: 'root'
} )
export class MatPaginationIntlService extends MatPaginatorIntl {
  firstPageLabel = 'First page';
  itemsPerPageLabel = 'Items per page';
  lastPageLabel = 'Last page';
  nextPageLabel = 'Next page';
  previousPageLabel = 'Previous page';

  constructor( public translate: TranslateService ) {
    super();

    translate.addLangs( ['en', 'fr'] );
    translate.setDefaultLang( 'en' );

    const browserLang = translate.getBrowserLang();
    translate.use( browserLang.match( /en|fr/ ) ? browserLang : 'en' );

    translate.onLangChange.subscribe(( event: LangChangeEvent ) => {
      this.translateLabels();
      this.changes.next();
    } );

    this.translateLabels();
  }

  getRangeLabel = ( page: number, pageSize: number, length: number ): string => {
    const of = this.translate ? this.translate.instant( 'mat-paginator-intl.of' ) : 'of';
    if ( length === 0 || pageSize === 0 ) {
      return '0 ' + of + ' ' + length;
    }
    length = Math.max( length, 0 );
    const startIndex = 
      page * pageSize > length
      ? ( Math.ceil( length / pageSize ) - 1 ) * pageSize 
      : page * pageSize;

    const endIndex = Math.min( startIndex + pageSize, length );
    return startIndex + 1 + ' - ' + endIndex + ' ' + of + ' ' + length;
  };

  translateLabels() {
    this.firstPageLabel = this.translate.instant( 'mat-paginator-intl.first_page' );
    this.itemsPerPageLabel = this.translate.instant( 'mat-paginator-intl.items_per_page' );
    this.lastPageLabel = this.translate.instant( 'mat-paginator-intl.last_page' );
    this.nextPageLabel = this.translate.instant( 'mat-paginator-intl.next_page' );
    this.previousPageLabel = this.translate.instant( 'mat-paginator-intl.previous_page' );
  }

}
