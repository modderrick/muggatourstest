import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

 
  apiLoaded: Observable<boolean>;
	center: google.maps.LatLngLiteral;
	zoom=12;
  date: string = new Date().toDateString();
	mapOptions: google.maps.MapOptions = {
		mapTypeId: 'hybrid',
		disableDoubleClickZoom: true,
		maxZoom: 15,
		minZoom: 8,
		mapTypeControl: false,
		fullscreenControl: false,
	}

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyBeeJTzryK7s-DaVABQGQwNVDaxN5oWn9o', 'callback')
		.pipe(
			map(() => true),
			catchError(() => of(false))
		);
   }

  ngOnInit(): void {
  }
  callback():void{
		console.log("map inistialization")
	}

}