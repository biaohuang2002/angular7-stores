import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatButtonModule
  , MatCardModule
  , MatGridListModule
  , MatIconModule
  , MatMenuModule
  , MatToolbarModule } from '@angular/material';

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
    , MatToolbarModule
  ]
} )
export class CustomMaterialModule { }
