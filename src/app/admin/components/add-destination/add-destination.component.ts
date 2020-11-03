import { Component, OnInit } from '@angular/core';
import { BreadCrumbs } from '../../interfaces/bread-crumbs';
import { CardHeader } from '../../interfaces/card-header';

@Component({
  selector: 'app-add-destination',
  templateUrl: './add-destination.component.html',
  styleUrls: ['./add-destination.component.scss']
})
export class AddDestinationComponent implements OnInit {
	pageTitle  = "destinations";
	formId ="destination-form-id";
		
	breadCrumbs: BreadCrumbs[] = [
		{
			title: "home",
			link: "/admin"
		},
		{
			title: "Tour Destination",
			link: "/admin/destination"
		}
	];

	actionButtons = {
    	link: "/admin/destination"
  	}

	cardHeader: CardHeader = {
		cardTitle:"Add destination",
		cardIcon: "create"
	}


  constructor() { }

  ngOnInit(): void {
  }

}
