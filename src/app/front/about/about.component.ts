import { Component, OnInit } from '@angular/core';
import { Parallax, SwiperOptions } from 'swiper';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public aboutConfig: SwiperOptions = {
    a11y: { enabled: true },
	direction: 'horizontal',
	spaceBetween:	10,
	speed:	2000,
	
	slidesPerView: 2,
	keyboard: false,
	mousewheel: false,
	scrollbar: false,
    autoplay: {
		delay:	3000,
		disableOnInteraction: false
	},
	threshold: 0,
  	loop: true,
	pagination: false,
	freeMode: true,
	freeModeMomentum: true,
	freeModeMomentumRatio:	2,
	watchOverflow: true,
	grabCursor:	true,
	slidesOffsetBefore:	10,

	
	centeredSlides: true,
	navigation: {
		nextEl: '.next-1',
		prevEl: '.prev-1'
	  },
  };


  aboutData1= [
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

	profileData = [
		{
			id:	1,
			name: "admin one",
			title: "chief executive officer"
		},
		{
			id:	2,
			name: "admin two",
			title: "chief executive officer"
		},
		{
			id:	3,
			name: "admin three",
			title: "chief executive officer"
		}
	]

  constructor() { }

  ngOnInit(): void {
  }

}

