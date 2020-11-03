import { Component, OnInit } from '@angular/core';
import { TourCategoryService } from 'src/app/services/tour-category.service';
import { Tour } from '../../interfaces/tour';

@Component({
  selector: 'app-tour-table',
  templateUrl: './tour-table.component.html',
  styleUrls: ['./tour-table.component.scss']
})
export class TourTableComponent implements OnInit {
	apiUrl="api/tours"
	tours: Tour[]=[];
	status: string;
	tableCols: String[]=["select","name","image","duration","status","actions"]
	constructor(private dataService: TourCategoryService){
		console.log(this.tours)
	}



	getTours(){
		this.dataService.getData(this.apiUrl).subscribe(data => {
			this.tours = data;
			console.log("datf"+ data);
		});
	}

	ngOnInit(): void {
		this.getTours();
		console.log(this.tours)
		console.log("hook been called")

		if (this.tours[0].status!= null && this.tours[0].status==1){
			this.status= "Enabled"
		}
		else{
			this.status="Disabled"
		}
	}

	deleteTour(tour: Tour): void{
		this.tours = this.tours.filter(c => c !== tour);
		this.dataService.deleteData(this.apiUrl,tour).subscribe();
	}

}
