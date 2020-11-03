import { Component, Input, OnInit } from '@angular/core';
import { BreadCrumbs } from '../../interfaces/bread-crumbs';
import { CardHeader } from '../../interfaces/card-header';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.scss']
})
export class AddComponentComponent implements OnInit {
	@Input()
	pageTitle;


	@Input()
	formId

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
