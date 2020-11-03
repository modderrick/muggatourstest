import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { tap, catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {


	headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
	httpOptions = {
	  headers: this.headers
	};

	constructor(private http: HttpClient) { 
		//console.log(this.apiUrl)
		
	}

	private handleError(error: HttpErrorResponse) {      
		let errorMessage = 'Unknown error!';
		if (error.error instanceof ErrorEvent){
			errorMessage = `Error: ${error.error.message}`;
		}else{
			errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
		}

		window.alert(errorMessage);
		return throwError(errorMessage)
	}

	getData(apiUrl):Observable<any>{
		return this.http.get<any>(apiUrl,this.httpOptions)
		.pipe(
			retry(3),
			catchError(this.handleError)
		);
	}

	deleteData(apiUrl: string,query: any | number):Observable<any>{
		const id = typeof query === 'number'?query:query.id;
		const url = `${apiUrl}/${id}`;
		console.log('id to be deleted '+ id)
		return this.http.delete<any>(url,this.httpOptions)
		.pipe(
			tap(_ => console.log(`deleted data ${id}`)),
			catchError(this.handleError)
		)

	}

}
