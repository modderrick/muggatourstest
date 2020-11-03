import { Component, OnInit } from '@angular/core';
import { BreadCrumbs } from '../../interfaces/bread-crumbs';
import { CardHeader } from '../../interfaces/card-header';

@Component({
  selector: 'app-tour-category',
  templateUrl: './tour-category.component.html',
  styleUrls: ['./tour-category.component.scss']
})
export class TourCategoryComponent implements OnInit {

	pageTitle  = "categories";
	  
	breadCrumbs: BreadCrumbs[] = [
		{
			title: "home",
			link: "/admin"
		},
		{
			title: "Dashboar",
			link: "/admin/dashboard"
		}
	];

	actionButtons = {
		link: "/admin/add-tour-category"	}

	cardHeader: CardHeader = {
		cardTitle:"Category List",
		cardIcon: "format_list_bulleted"
	}

  constructor() { }

  ngOnInit(): void {
  }

}
