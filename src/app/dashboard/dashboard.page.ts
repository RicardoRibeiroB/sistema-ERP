import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { Chart, ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor() { }

  @ViewChild("meuCanvas", { static: true }) elemento!: ElementRef;

  ngOnInit() {

    // const chartConfig: ChartConfiguration = {
    //   type: 'bar' as ChartType, // Especifica o tipo de gráfico como 'line'
    //   data: {
    //     labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'], // Etiquetas para o eixo X
    //     datasets: [
    //       {
    //         label: 'Vendas',
    //         data: [10, 20, 30, 40], // Dados a serem exibidos
    //         backgroundColor: 'rgba(75, 192, 192, 0.2)', // Cor de fundo
    //         borderColor: 'rgba(75, 192, 192, 1)', // Cor da borda
    //         borderWidth: 1
    //       }
    //     ]
    //   },
    //   options: {
    //     responsive: true, // Faz o gráfico ser responsivo
    //     scales: {
    //       y: {
    //         beginAtZero: true // Define o eixo Y para começar no zero
    //       }
    //     }
    //   }
    // };

    // new Chart(this.elemento.nativeElement, chartConfig);

  }

  // public chartData = {
  //   datasets: [
  //     {
  //       label: 'Vendas',
  //       data: [10,20,30,40,50],
  //       backgroundColor: 'rgba(54, 162, 235, 0.2)',
  //       borderColor: 'rgba(54, 162, 235, 1)',
  //       borderWidth: 1
  //     }
  //   ],
  //   labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
  // };

  // public chartOptions = {
  //   responsive: true,
  //   scales:{
  //     y: {
  //       beginAtZero: true
  //     }
  //   }
  // }

}
