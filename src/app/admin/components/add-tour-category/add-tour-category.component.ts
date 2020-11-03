import { Component, OnInit } from '@angular/core';
import { BreadCrumbs } from '../../interfaces/bread-crumbs';
import { CardHeader } from '../../interfaces/card-header';

@Component({
  selector: 'app-add-tour-category',
  templateUrl: './add-tour-category.component.html',
  styleUrls: ['./add-tour-category.component.scss']
})
export class AddTourCategoryComponent implements OnInit {

  pageTitle  = "categories";
	  
	breadCrumbs: BreadCrumbs[] = [
		{
			title: "home",
			link: "/admin"
		},
		{
			title: "Tour Category",
			link: "/admin/tour-category"
		}
	];

	actionButtons = {
    link: "/admin/tour-category"
  }

	cardHeader: CardHeader = {
		cardTitle:"Add category",
		cardIcon: "create"
	}

  constructor() { }

  ngOnInit(): void {
  }

}
