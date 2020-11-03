import { Component, OnInit } from '@angular/core';
import { BreadCrumbs } from '../../interfaces/bread-crumbs';
import { CardHeader } from '../../interfaces/card-header';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  	pageTitle  = "Bookings";
	  
	breadCrumbs: BreadCrumbs[] = [
		{
			title: "home",
			link: "/admin"
		},
		{
			title: "Bookings",
			link: "/admin/booking"
		}
	];

	actionButtons = {
		link: ""
	}

	cardHeader: CardHeader = {
		cardTitle:"Booking List",
		cardIcon: "format_list_bulleted"
	}

	constructor() { }

	ngOnInit(): void {
	}

}
