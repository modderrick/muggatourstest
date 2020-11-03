import { Component, Input, OnInit } from '@angular/core';
import { CardComponent } from '../../admin-schematics/card/card.component';
import { BreadCrumbs } from '../../interfaces/bread-crumbs';
import { CardHeader } from '../../interfaces/card-header';


@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.scss']
})
export class ViewComponentComponent implements OnInit {
	//page_title  = "categories";
	@Input()
	pageTitle;

	@Input()
	cardHeader: CardHeader;

	@Input()
	breadCrumbs: BreadCrumbs[];

	@Input()
	actionButtons

  constructor() { }

  ngOnInit(): void {
  }

}
