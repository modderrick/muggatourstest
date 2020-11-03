import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { catchError, finalize, map } from 'rxjs/operators';
import { Observable, of as observableOf, merge, from, BehaviorSubject, of } from 'rxjs';
import { TourCategoryService } from '../../../services/tour-category.service';
import { TourCategory } from '../../interfaces/tour-category';

export class TourCategoryTableDataSource {
}


