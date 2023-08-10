import { Component, ViewChild } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})



export class HomePageComponent {
  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions>;

  public role = localStorage.getItem('permission')
  // chartSeries : ApexNonAxisChartSeries = [44, 55, 13, 43, 22]
  // chartDetails : ApexChart = {
  //   type : 'pie',
  //   toolbar : {
  //     show : true
  //   }
  // };

  constructor( private router: Router ) {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: "donut"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  getPermission() {
    this.role = localStorage.getItem('permission')
    console.log('role', this.role)
    return this.role;
  }
  isActiveNavButton = [true, false, false, false, false]
  activateButton(buttonIndex: number) {
      this.isActiveNavButton.fill(false);
      this.isActiveNavButton[buttonIndex] = true;
  }

  logout() {
    localStorage.clear()
    this.router.navigate(['login']);
    // console.log('go')
  }



}
