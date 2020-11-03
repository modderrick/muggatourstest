import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {
  date: string = new Date().toDateString();

  articleCategories =[
    {
      id: 1,
      title:  "article"
	},
	{
		id: 2,
		title:  "building"
	},
	{
		id: 3,
		title:  "construction"
	},
	{
		id: 4,
		title:  "industry"
	},
	{
		id: 5,
		title:  "metal"
	},
	{
		id: 6,
		title:  "article"
	  },
	  {
		  id: 7,
		  title:  "building"
	  },
	  {
		  id: 8,
		  title:  "construction"
	  },
	  {
		  id: 9,
		  title:  "industry"
	  },
	  {
		  id: 10,
		  title:  "metal"
	  },
]

  toursData= [
    {
      id: 25,
      name: "image one"
    },
    {
      id: 26,
      name: "image two"
    },
    {
      id: 27,
      name: "image three"
    },
    {
      id: 29,
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

  constructor() { }

  ngOnInit(): void {
  }

}