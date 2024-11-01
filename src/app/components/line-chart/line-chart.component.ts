import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css',
})
export class LineChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;

  constructor() {
    this.chartOptions = {
      chart: {
        type: 'line',
        backgroundColor: 'transparent', 
        plotBackgroundColor: 'transparent', 
      },
      title: {
        text: 'Gráfico de Líneas',
        style: {
          color: '#fff',
        },
      },
      xAxis: {
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
            color: '#fff', 
          },
        },
        labels: {
          style: {
            color: '#fff',
          },
        },
      },
      legend: {
        itemStyle: {
          color: '#fff',
        },
      },
      series: [
        {
          name: 'Serie 1',
          type: 'line', 
          data: [29.9, 71.5, 106.4, 129.2, 144.0], 
          color: '#a3e635', 
        }
      ],
    };
  }
}
