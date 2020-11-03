import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { TourCategoryTableDataSource } from './tour-category-table-datasource';
import { TourCategoryService } from '../../../services/tour-category.service';
import { TourCategory } from '../../interfaces/tour-category';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-tour-category-table',
  templateUrl: './tour-category-table.component.html',
  styleUrls: ['./tour-category-table.component.scss']
})
export class TourCategoryTableComponent implements OnInit {
	categories: TourCategory[]=[];

	constructor(private dataService: TourCategoryService){
		console.log(this.categories)

	}

	getCategories(){
		this.dataService.getData('api/categories').subscribe(data => {
			this.categories = data;
			console.log("datf"+ data);
		});
	}

	ngOnInit(): void {
		this.getCategories();
		console.log(this.categories)
		console.log("hook been called")
	}

	delete(category: TourCategory): void{
		this.categories = this.categories.filter(c => c !== category);
		this.dataService.deleteData('api/categories',category).subscribe();
	}
 
}
