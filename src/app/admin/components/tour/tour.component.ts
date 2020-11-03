import { Component, OnInit } from '@angular/core';
import { BreadCrumbs } from '../../interfaces/bread-crumbs';
import { CardHeader } from '../../interfaces/card-header';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {

  	pageTitle  = "Tours";
	  
	breadCrumbs: BreadCrumbs[] = [
		{
			title: "home",
			link: "/admin"
		},
		{
			title: "Tours",
			link: "/admin/tours"
		}
	];

	actionButtons = {
		link: "/admin/add-tour",
		}

	cardHeader: CardHeader = {
		cardTitle:"Tour List",
		cardIcon: "format_list_bulleted"
	}

  constructor() { }

  ngOnInit(): void {
  }

}
