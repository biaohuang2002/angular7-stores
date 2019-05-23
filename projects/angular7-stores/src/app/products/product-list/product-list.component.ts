import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';
import { Config } from '../config.interface';
import { throwError } from 'rxjs';

@Component( {
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
} )
export class ProductListComponent implements OnInit {
  productListings;
  config: Config;
  headers: string[];
  error: any;
  pageSizeOptions: number[] = [];

  constructor( public productService: ProductService ) { }

  ngOnInit() {
    this.productListings = {
      items: [],
      pageIndex: 0,
      pageSize: 25
    };
    this.showProductListings(this.productListings);
  }

  showConfig() {
    this.productService.getConfig().subscribe(
      ( data: Config ) => this.config = { ...data },
      error => this.error = error // error path
    );
  }

  showConfigResponse() {
    this.productService.getConfigResponse()
      // resp is of type `HttpResponse<Config>`
      .subscribe( resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map( key =>
          `${key}: ${resp.headers.get( key )}` );

        // access the body directly, which is typed as `Config`.
        this.config = { ...resp.body };
      } );
  }
  
  showProductListings(e) {
    this.productService.getProductListings(e).subscribe(
      ( data ) => {
        this.productListings = data.body;
      },
      error => this.error = error // error path
    );
  }
}
