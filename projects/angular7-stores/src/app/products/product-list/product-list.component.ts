import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ProductService } from '../product.service';
import { throwError } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component( {
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
} )
export class ProductListComponent implements OnInit {
  productListings;
  pageSizeOptions: number[] = [];

  constructor(
    public productService: ProductService
    , public router: Router
    , public activatedRoute: ActivatedRoute ) {

  }

  ngOnInit() {
    this.activatedRoute.queryParams.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(( queryParams: ParamMap ) => {
        return this.productService.getProductListings( queryParams );
      } )
    ).subscribe(
      ( data ) => {
        this.productListings = data["body"];
        this.onPaginatorChanges( this.productListings );
      }, ( err ) => {
        console.error( err );
      }, () => {
        console.log( 'Complete!' );
      } );
  }

  onPaginatorChanges( e ) {
    const queryParams = { "page-size": e.pageSize || 36, "page-index": e.pageIndex || 0 };
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: queryParams,
        queryParamsHandling: null, // remove to replace all query params by provided
      }
    );
  }
}
