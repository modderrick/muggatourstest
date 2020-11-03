import { Component, OnInit } from '@angular/core';
import { Parallax, SwiperOptions } from 'swiper';
//import { Swiper,SwiperOptions } from 'swiper/bundle';
import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import { faMapMarkerAlt,faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faClock} from '@fortawesome/free-regular-svg-icons'
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  mapMaker = faMapMarkerAlt;
  faClock = faClock;
 
  currentRate = 3.5;
  date: string = new Date().toDateString();


  options: FormGroup;
  
  
  public config1: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: false,
    mousewheel: false,
    scrollbar: false,
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

  public config2: SwiperOptions ={
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 4,
    keyboard: false,
    mousewheel: false,
    scrollbar: false,
    pagination: false,
    navigation: {
      nextEl: '.next-2',
      prevEl: '.prev-2'
    }

  };

  public config3: SwiperOptions ={
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

  public config4: SwiperOptions ={
    a11y: { enabled: true },
    direction: 'horizontal',
    spaceBetween: 30,
    slidesOffsetAfter:  10,
    slidesOffsetBefore: 10,
    freeMode: true,
    freeModeMomentum: true,
    slidesPerView: 3,
    keyboard: false,
    mousewheel: false,
    scrollbar: false,
    pagination: false,
    navigation: {
      nextEl: '.next-4',
      prevEl: '.prev-4'

    },
    autoplay: {
      disableOnInteraction: false
    }
  };

  public config5: SwiperOptions ={
    a11y: { enabled: true },
    direction: 'horizontal',
    spaceBetween: 10,
    slidesOffsetAfter:  0,
    slidesOffsetBefore: 0,
    freeMode: true,
    freeModeMomentum: true,
    slidesPerView: 10,
    keyboard: false,
    mousewheel: false,
    scrollbar: false,
    pagination: false,
    navigation: {
      nextEl: '.next-5',
      prevEl: '.prev-5'

    },
    autoplay: {
      disableOnInteraction: false
    }
  };

  //@ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
  //@ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;

  //this.componentRef.directiveRef.setIndex(0);

  slidesData = [
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
  
  tourData2 = [
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
    {
      id: 15,
      name: "image eleven"
    },
    {
      id: 16,
      name: "image eleven"
    },
    {
      id: 17,
      name: "image eleven"
    },
    {
      id: 13,
      name: "image eleven"
    },
    {
      id: 19,
      name: "image eleven"
    },
    {
      id: 1,
      name: "image eleven"
    }
  ];

  tourData3 = [
    {
      id: 1,
      name: "image eleven"
    },
    {
      id: 2,
      name: "image eleven"
    },
    {
      id: 3,
      name: "image eleven"
    },
    {
      id: 4,
      name: "image eleven"
    },
    {
      id: 5,
      name: "image eleven"
    },
    {
      id: 6,
      name: "image eleven"
    },
    {
      id: 7,
      name: "image eleven"
    },
    {
      id: 8,
      name: "image eleven"
    },
    {
      id: 9,
      name: "image eleven"
    },
    {
      id: 10,
      name: "image eleven"
    }
  ];

  tourData4 = [
    {
      id: 31,
      name: "image eleven"
    },
    {
      id: 32,
      name: "image eleven"
    },
    {
      id: 33,
      name: "image eleven"
    },
    {
      id: 34,
      name: "image eleven"
    },
    {
      id: 35,
      name: "image eleven"
    },
    {
      id: 36,
      name: "image eleven"
    },
    {
      id: 37,
      name: "image eleven"
    },
    {
      id: 38,
      name: "image eleven"
    },
    {
      id: 39,
      name: "image eleven"
    },
    {
      id: 40,
      name: "image eleven"
    },
  ];

  searchToureForm = new FormGroup({
    keyWord: new  FormControl(''),
    activity: new FormControl,
    destination: new FormControl,
    duration: new FormControl(''),
    date: new FormControl('')

  });
  

  constructor(rateConfig: NgbRatingConfig) { 
		
		rateConfig.max = 5;
		rateConfig.readonly = true;

  }

  ngOnInit(): void {
    
  }
}
