import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule
  , MatCardModule
  , MatGridListModule
  , MatIconModule
  , MatMenuModule
  , MatPaginatorModule
  , MatToolbarModule
} from '@angular/material';


@NgModule( {
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule
    , MatCardModule
    , MatGridListModule
    , MatIconModule
    , MatMenuModule
    , MatPaginatorModule
    , MatToolbarModule
  ]
} )
export class CustomMaterialModule { }
