import { Component, OnInit } from '@angular/core';
import { BreadCrumbs } from '../../interfaces/bread-crumbs';
import { CardHeader } from '../../interfaces/card-header';

@Component({
  selector: 'app-add-tour',
  templateUrl: './add-tour.component.html',
  styleUrls: ['./add-tour.component.scss']
})
export class AddTourComponent implements OnInit {
	pageTitle  = "Tours";
	  
	formId ="tour_form_id";

	  
	breadCrumbs: BreadCrumbs[] = [
		{
			title: "home",
			link: "/admin"
		},
		{
			title: "Tour",
			link: "/admin/tour"
		}
	];

	actionButtons = {
    link: "/admin/tour"
  }

	cardHeader: CardHeader = {
		cardTitle:"Add tour",
		cardIcon: "create"
	}

  constructor() { }

  ngOnInit(): void {
  }

}
