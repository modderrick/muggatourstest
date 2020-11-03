import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { TourCategory } from '../admin/interfaces/tour-category';
import { catchError, map, tap } from 'rxjs/operators';
import { Page, queryPaginated } from '../admin/classes/page';
import { PagedData } from '../admin/classes/paged-data';

@Injectable({
  providedIn: 'root'
})
export class TourCategoryService {
	//private apiUrl = 'api/categories';
	pagedCache:any[]=[];

	headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
	httpOptions = {
	  headers: this.headers
	};

	constructor(private http: HttpClient) { 
		//console.log(this.apiUrl)
		
	}

	private handleError<T>(operation='operation',result?:T) {                                 //Created a function to handle and log errors, in case
		return (error:any):Observable<T> =>{
			console.log(error)
			return of(result as T);
		}
	}

	getData(apiUrl: string):Observable<any[]>{
		return this.http.get<any[]>(apiUrl)
		.pipe(
			tap(res => console.log("this is the response" +res)),
			catchError(this.handleError)
		);
	}

	getDataBy(apiUrl: string,id: number):Observable<any>{
		const url = `${apiUrl}/${id}`;
		return this.http.get<any>(url).pipe(
			tap(_ => console.log(`fetched hero id=${id}`)),
		  	catchError(this.handleError<any>(`getHero id=${id}`))
		);
	}


	addData(apiUrl: string, dataValue: string): Observable<any> {
		const data = { dataValue };
	 
		return this.http.post<any>(apiUrl, data, this.httpOptions).pipe(
			catchError(this.handleError<any>('Unable to add tour category'))
		);
	}


	updateData(apiUrl: string,data: any): Observable<any> {
		return this.http.put(apiUrl, data, this.httpOptions).pipe(
			catchError(this.handleError)
		);
	}


	deleteData(apiUrl: string,query: any | number):Observable<any>{
		const id = typeof query === 'number'?query:query.id;
		const url = `${apiUrl}/${id}`;
		console.log('id to be deleted '+ id)
		return this.http.delete<any>(url,this.httpOptions)
		.pipe(
			tap(_ => console.log(`deleted category ${id}`)),
			catchError(this.handleError<any>('delete category'))
		)

	}

  

	searchData(apiUrl: string,term: string): Observable<any[]> {
		term = term.trim();
		// add safe, encoded search parameter if term is present
		const options = term ?
		{ params: new HttpParams().set('query', term)} : {};

		return this.http.get<any[]>(apiUrl, options).pipe(
			catchError(this.handleError<any[]>("unable to find "))
		);
	}


	list(baseUrl,urlOrFilter?: string | object): Observable<Page<any>> {
		return queryPaginated<any>(this.http, baseUrl, urlOrFilter);
	}


	
 
}
