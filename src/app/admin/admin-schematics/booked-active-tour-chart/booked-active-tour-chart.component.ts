import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-booked-active-tour-chart',
  templateUrl: './booked-active-tour-chart.component.html',
  styleUrls: ['./booked-active-tour-chart.component.scss']
})
export class BookedActiveTourChartComponent implements OnInit {

	public lineChartData: ChartDataSets[] = [
		{
			data: [65, 59, 80, 81, 56, 55, 40,20,15,5,70,95],
			label: 'Booked Tours'
		},
		{
			data: [10, 30, 45, 71, 76, 80, 50,60,20,50,45,80],
			label: 'Active Tours'
		},
	];
	public lineChartLabels: Label[] = [
		'January', 'February', 'March', 'April', 'May', 'June', 'July','August',
		'September','October','November','December'
	];
	public lineChartOptions: (ChartOptions & { annotation: any }) = {
		responsive: true,
		scales: {
			// We use this empty structure as a placeholder for dynamic theming.
			xAxes: [{}],
			yAxes: [
				{
					id: 'y-axis-0',
					position: 'left',
				},
				{
					id: 'y-axis-1',
					position: 'right',
					gridLines: {
						color: 'rgba(255,0,0,0.3)',
					},
					ticks: {
						fontColor: 'red',
					}
				}
			]
		},
		annotation: {
			annotations: [
				{
					type: 'line',
					mode: 'vertical',
					scaleID: 'x-axis-0',
					value: 'March',
					borderColor: 'orange',
					borderWidth: 2,
					label: {
					enabled: true,
					fontColor: 'orange',
					content: 'LineAnno'
					}
				},
			],
		},
	};
	public lineChartColors: Color[] = [
		{ // grey
		  backgroundColor: 'rgba(148,159,177,0.2)',
		  borderColor: 'rgba(148,159,177,1)',
		  pointBackgroundColor: 'rgba(148,159,177,1)',
		  pointBorderColor: '#fff',
		  pointHoverBackgroundColor: '#fff',
		  pointHoverBorderColor: 'rgba(148,159,177,0.8)'
		},
	];

	public lineChartLegend = true;
	public lineChartType: ChartType = 'line';
	public lineChartPlugins = [pluginAnnotations];

	constructor() { }

	ngOnInit() {
	}

}
