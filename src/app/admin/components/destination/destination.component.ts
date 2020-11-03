import { Component, OnInit } from '@angular/core';
import { BreadCrumbs } from '../../interfaces/bread-crumbs';
import { CardHeader } from '../../interfaces/card-header';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  	pageTitle  = "Destinations";
	  
	breadCrumbs: BreadCrumbs[] = [
		{
			title: "home",
			link: "/admin"
		},
		{
			title: "Destinations",
			link: "/admin/destination"
		}
	];

	actionButtons = {
		link: "/admin/add-destination",
		}

	cardHeader: CardHeader = {
		cardTitle:"Destination List",
		cardIcon: "format_list_bulleted"
	}


  constructor() { }

  ngOnInit(): void {
  }

}
