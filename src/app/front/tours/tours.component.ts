import { Component, OnInit } from '@angular/core';

import { Parallax, SwiperOptions } from 'swiper';

import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';



@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit {
  currentRate = 3.5;
  date: string = new Date().toDateString();
  rateConfig: NgbRatingConfig
  
  
  public destinationConfig: SwiperOptions = {
    a11y: { enabled: true },
	direction: 'horizontal',
	spaceBetween:	10,
	speed:	2000,
	
    slidesPerView: 10,
    keyboard: false,
    mousewheel: false,
	scrollbar: false,
    autoplay: {
		delay:	1,
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
	slidesOffsetBefore:	50
	
  };

  

  destinationsData = [
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



  toursData= [
    {
      id: 10,
      name: "image one"
    },
    {
      id: 6,
      name: "image two"
    },
    {
      id: 8,
      name: "image three"
    },
    {
      id: 15,
      name: "image five"
    }
  ];

  
  latestTourData = [
    {
      id: 11,
      name: "image eleven"
    },
    {
      id: 12,
      name: "image eleven"
    },
    {
      id: 13,
      name: "image eleven"
    },
    {
      id: 14,
      name: "image eleven"
    },
  ];

  recentArticleData = [
    {
      id: 21,
      name: "image eleven"
    },
    {
      id: 22,
      name: "image eleven"
    },
    {
      id: 23,
      name: "image eleven"
    }
  ];

  searchToureForm = new FormGroup({
    keyWord: new  FormControl(''),
    activity: new FormControl,
    destination: new FormControl,
    duration: new FormControl(''),
    date: new FormControl('')

  });


  constructor() { }

  ngOnInit(): void {
  }

}
