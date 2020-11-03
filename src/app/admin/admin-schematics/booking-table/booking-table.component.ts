import { Component, OnInit } from '@angular/core';
import { TourCategoryService } from 'src/app/services/tour-category.service';
import { Tour } from '../../interfaces/tour';

@Component({
  selector: 'app-booking-table',
  templateUrl: './booking-table.component.html',
  styleUrls: ['./booking-table.component.scss']
})
export class BookingTableComponent implements OnInit {

  	apiUrl="api/bookings"
	bookings: any[]=[];
	status: string;
	tableCols: String[]=["select","name","image","duration","status","actions"]
	constructor(private dataService: TourCategoryService){
		console.log(this.bookings)
	}

	getBooking(){
		this.dataService.getData(this.apiUrl).subscribe(data => {
			this.bookings = data;
			console.log("datf"+ data);
		});
	}

	ngOnInit(): void {
		this.getBooking();
		console.log(this.bookings)
		console.log("hook been called")

		if (this.bookings[0].status!= null && this.bookings[0].status==1){
			this.status= "Enabled"
		}
		else{
			this.status="Disabled"
		}
	}

	deleteBooking(booking: any): void{
		this.bookings = this.bookings.filter(c => c !== booking);
		this.dataService.deleteData(this.apiUrl,booking).subscribe();
	}

}
