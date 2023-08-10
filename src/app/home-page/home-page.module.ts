import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { NgApexchartsModule } from "ng-apexcharts";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    NgApexchartsModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule { }
