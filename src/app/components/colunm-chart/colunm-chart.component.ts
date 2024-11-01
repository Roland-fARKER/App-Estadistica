import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-colunm-chart',
  templateUrl: './colunm-chart.component.html',
  styleUrl: './colunm-chart.component.css',
})
export class ColunmChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;

  constructor() {
    this.chartOptions = {
      chart: {
        type: 'column',
        backgroundColor: 'transparent',
        plotBackgroundColor: 'transparent',
      },
      title: {
        text: 'Gráfico de Barras Verticales',
        style: {
          color: '#fff',
          fontSize: '18px',
        },
      },
      xAxis: {
        title: {
          style: {
            color: '#ff' 
          }
        },
        categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        labels: {
          style: {
            color: '#fff',
          },
        },
      },
      yAxis: {
        title: {
          text: 'Valores',
          style: {
            color: '#fff'
          }
        },
        labels: {
          style: {
            color: '#fff',
          },
        },
      },
      series: [
        {
          name: 'Ejemplo',
          type: 'column',
          data: [29.9, 71.5, 106.4, 129.2, 144.0],
          color: '#a3e635',
        },
      ],
      legend: {
        itemStyle: {
          color: '#fff'
        }
      },
    };
  }
}
