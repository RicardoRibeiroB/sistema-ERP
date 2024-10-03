import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor() { }

    @ViewChild('myChart', { static: true }) chartRef!: ElementRef;

  ngOnInit() {

      Chart.register(...registerables);
  
      const ctx = this.chartRef.nativeElement.getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
          datasets: [
            {
              label: 'Vendas do Ano',
              data: [12, 19, 3, 5, 8, 20, 10, 7, 14, 42, 33, 25],
              backgroundColor: '#043259',
              borderColor: '#04315969',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

  }


