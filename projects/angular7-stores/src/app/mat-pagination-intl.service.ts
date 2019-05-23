import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class MatPaginationIntlService extends MatPaginatorIntl {
  firstPageLabel = 'First page';
  itemsPerPageLabel = 'Products per page';
  lastPageLabel = 'Last page';
  nextPageLabel = 'Next page';
  previousPageLabel = 'Previous page';
}
