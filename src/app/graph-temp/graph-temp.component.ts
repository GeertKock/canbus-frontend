import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graph-temp',
  standalone: true,
  templateUrl: './graph-temp.component.html',
  styleUrl: './graph-temp.component.css',
  template: `
  <p>{{ canData }}</p>
`,
})
export class GraphTempComponent {
  @Input() canData: any[] = [];

  myChart: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.renderChart();
    }
  }

  renderChart(): void {
    const ctx = document.getElementById('lineChart') as HTMLCanvasElement;
    this.myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.canData.map(data => new Date(data.timestamp).toLocaleTimeString()),
        datasets: [{
          label: 'RPM',
          data: this.canData.map(data => data.value),
          borderColor: 'blue',
          borderWidth: 1,
          fill: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
}
