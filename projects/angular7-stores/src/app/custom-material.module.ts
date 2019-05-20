import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatButtonModule
  , MatCardModule
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
    , MatIconModule
    , MatMenuModule
    , MatToolbarModule
  ]
} )
export class CustomMaterialModule { }
