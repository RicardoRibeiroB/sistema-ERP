import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor() { }

  @ViewChild("meuCanvas", { static: true }) elemento!: ElementRef;

  ngOnInit() {

    const config = {
      type: 'bar',
      data: ['Jan','Fev','Mar', 'Abr', 'Mar', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    };

  }

  //  public chartData = {
  //    datasets: [
  //      {
  //        label: 'Vendas',
  //        data: [10,20,30,40,50],
  //        backgroundColor: 'rgba(54, 162, 235, 0.2)',
  //        borderColor: 'rgba(54, 162, 235, 1)',
  //        borderWidth: 1
  //      }
  //    ],
  //    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
  //  };

  // public chartOptions = {
  //   responsive: true,
  //   scales:{
  //     y: {
  //       beginAtZero: true
  //     }
  //   }
  // }

}
