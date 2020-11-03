import { Component, OnInit } from '@angular/core';
import { Parallax, SwiperOptions } from 'swiper';

import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';

import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {

  apiLoaded: Observable<boolean>;
	currentRate = 3.5;
	reviewRate =3;
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

	public config1: SwiperOptions = {
		a11y: { enabled: true },
		direction: 'horizontal',
		slidesPerView: 3,
		keyboard: false,
		mousewheel: false,
		scrollbar: false,
		spaceBetween: 30,
		navigation: {
		nextEl: '.next-1',
		prevEl: '.prev-1'
		},
		autoplay: {
		disableOnInteraction: false
		},
		loop: true,
		pagination: false,
	};

	public config0: SwiperOptions ={
		a11y: { enabled: true },
		direction: 'horizontal',
		spaceBetween: 30,
		slidesOffsetAfter:  0,
		slidesOffsetBefore: 0,
		freeMode: true,
		freeModeMomentum: true,
		slidesPerView: 2,
		keyboard: false,
		mousewheel: false,
		scrollbar: false,
		pagination: false,
		navigation: {
		nextEl: '.next-3',
		prevEl: '.prev-3'
		},
		autoplay: {
		disableOnInteraction: false
		}
	};

	tourData0 = [
		{
		id: 1,
		name: "image one"
		},
		{
		id: 2,
		name: "image two"
		},
		{
		id: 3,
		name: "image three"
		},
		{
		id: 4,
		name: "image five"
		},
		{
		id: 5,
		name: "image six"
		},
		{
		id: 6,
		name: "image seven"
		},
		{
		id: 7,
		name: "image eight"
		},
		{
		id: 8,
		name: "image nine"
		},
		{
		id: 9,
		name: "image ten"
		},
		{
		id: 10,
		name: "image eleven"
		},
	];


	tourData1= [
		{
			id: 1,
			name: "image one"
		},
		{
		id: 2,
		name: "image two"
		},
		{
		id: 3,
		name: "image three"
		},
		{
		id: 4,
		name: "image five"
		},
		{
		id: 5,
		name: "image six"
		},
		{
		id: 6,
		name: "image seven"
		},
		{
		id: 7,
		name: "image eight"
		},
		{
		id: 8,
		name: "image nine"
		},
		{
		id: 9,
		name: "image ten"
		},
		{
		id: 10,
		name: "image eleven"
		}
	];

	toureReviewForm = new FormGroup({
		fullName: new  FormControl(''),
		email: new FormControl,
		review: new FormControl,
		rating: new FormControl(''),
		date: new FormControl('')

	});

	constructor(rateConfig: NgbRatingConfig,httpClient: HttpClient, fb: FormBuilder) { 
		this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyBeeJTzryK7s-DaVABQGQwNVDaxN5oWn9o', 'callback')
		.pipe(
			map(() => true),
			catchError(() => of(false))
		);

		rateConfig.max = 5;
		rateConfig.readonly = false;
	}

	ngOnInit(): void {
		navigator.geolocation.getCurrentPosition((position) => {
			this.center = {
				lat: position.coords.latitude,
				lng: position.coords.longitude,
			}
		});
	}

	callback():void{
		console.log("map inistialization")
	}

}
