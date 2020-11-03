import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { merge, Observable, Subject } from 'rxjs';
import { debounceTime, share, startWith, switchMap } from 'rxjs/operators';
import { ApiDataService } from 'src/app/services/api/api-data.service';
import { TourCategoryService } from 'src/app/services/tour-category.service';
import { Page } from '../../classes/page';
import { Tour } from '../../interfaces/tour';
import  Swal  from 'sweetalert2/dist/sweetalert2.js';
import { text } from '@fortawesome/fontawesome-svg-core';
//declare var $;
class DataTablesResponse {
	results: any[];
	draw: number;
	recordsFiltered: number;
	recordsTotal: number;
}


@Component({
	selector: 'app-destination-table',
	templateUrl: './destination-table.component.html',
	styleUrls: ['./destination-table.component.scss']
})
export class DestinationTableComponent implements AfterViewInit, OnDestroy, OnInit {

	destinations: any[] = [];
	API_URL = "http://localhost:8000/apiv1"
	//API_URL = "api"

	status: string = null;


	//@ViewChild('dataTable',{static: true}) table
	//dataTable: any
	dtOptions: any = {};
	dtTrigger: Subject<any> = new Subject();


	constructor(private renderer: Renderer2, private router: Router,
		private apiService: ApiDataService) {

	}
	ngAfterViewInit(): void {
		this.dtTrigger.next()
		this.renderer.listen('document', 'click', (event) => {
			if (event.target.hasAttribute("add-destination")) {
				//alert(`row with id ${event.target.getAttribute("add-destination")}`)
				this.router.navigate(["/admin/" + event.target.getAttribute("add-destination")]);
			} else if (event.target.hasAttribute("del-destination")) {
				let row = event.target.getAttribute("data-destination");
				this.comfirmDelete(row);
				//alert(`Are you show you want to delete ${row}`)
			}
		});
	}

	ngOnInit(): void {
		//const that = this
		//this.getDestinations(`${this.API_URL}/destinations/?format=datatables`);
		this.initializeTable();

	}

	initializeTable(): void {
		this.dtOptions = {
			pagingType: 'full_numbers',
			pageLength: 2,
			serverSide: true,
			processing: true,
			//ajax: `${this.API_URL}/destinations`,
			ajax: `${this.API_URL}/destinations/?format=datatables`,
			'lengthMenu': [[5, 10, 20, 30, 40, 50, -1], [5, 10, 20, 30, 40, 50, 'All']],
			'columns': [
				{
					title: '',
					data: 'id'
				},
				{
					title: 'Destination',
					data: 'destination'
				},
				{
					title: 'Description',
					data: 'destinationDesc',

				},
				{
					title: 'Status',
					data: 'destinationStatus'
				},
				{
					title: 'Actions',
					render: (data: any, type: any, row: any, full: any) => {
						return `<button class="btn p-0 btn-sm btn-primary mr-1" ><i add-destination="add-destination" class="fas fa-pencil-alt p-2"></i></button>
								<button class="btn p-0 btn-sm btn-danger" ><i data-destination="${row.destination}" del-destination="${row.id}" class="fas fa-trash-alt p-2"></i></button>`;
					}

				}
			],
			//responsive: true,
			columnDefs: [
				{
					'targets': 0,
					//'className': 'select-checkbox',
					'checkboxes': true,

					'orderable': false

				},
				{
					'targets': 4,
					'orderable': false
				}
			],
			/*'select':{
				'style': 'multi'
			}*/

		};

	}

	ngOnDestroy(): void {
		this.dtTrigger.unsubscribe();
	}

	getDestinations(url) {
		const t0 = performance.now();
		this.apiService.getData(url).subscribe(res => {
			console.log(`HTTP RESPONSE DATA: ${JSON.stringify(res.data)}`)

			this.destinations = res.data;
			this.dtTrigger.next();
		},
			error => {
				console.log(`HTTP ERROR FOR DESTINATIONS: ${error.statusText}`);
			});
	}

	deleteDestination(destination: any): void {
		this.destinations = this.destinations.filter(c => c !== destination);
		this.apiService.deleteData(this.API_URL, destination).subscribe();

	}

	comfirmDelete(data: any) {
		Swal.fire({
			title: `Are you sure want to delete ${data}?`,
			text: 'You will not be able to recover this data!',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Yes, delete it!',
			cancelButtonText: 'No, keep it'
		}).then((result) => {
			if (result.value) {
				Swal.fire(
					'Deleted!',
					`${data} has been deleted.`,
					'success'
				)
			} else if (result.dismiss === Swal.DismissReason.cancel) {
				Swal.fire(
					'Cancelled',
					`${data} is not deleted :)`,
					'error'
				)
			}
		})
	}
}
