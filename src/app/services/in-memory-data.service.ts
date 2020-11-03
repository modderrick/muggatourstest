import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TourCategory } from '../admin/interfaces/tour-category';
import { Tour } from '../admin/interfaces/tour';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

	createDb(){
		const categories: TourCategory[] = [
			{id: 1,categoryTitle:"Family Tour"},
			{id: 2,categoryTitle:"Relaxation Tour"},
			{id: 3,categoryTitle:"Holiday & Seasonal Tour"},
			{id: 4,categoryTitle:"Wild & Adeventure Tour"},
			{id: 5,categoryTitle:"Out Door Activity Tour"},
			{id: 6,categoryTitle:"City Tour"},
			{id: 7,categoryTitle:"Culture & Thematic Tour"},
		];
		const tours: Tour[]=[
			{
				id: 1,
				name: "Camping",
				description: "camping is the best",
				destination: "rwenzori mountains",
				price: 430,
				duration: 4,
				discount: 14,
				status: 0
			},
			{
				id: 2,
				name: "Camping",
				description: "camping is the best",
				destination: "rwenzori mountains",
				price: 430,
				duration: 5,
				discount: 30,
				status: 1
			},
			{
				id: 3,
				name: "Camping",
				description: "camping is the best",
				destination: "rwenzori mountains",
				price: 430,
				duration: 3,
				discount: 20,
				status: 1
			},
			{
				id: 4,
				name: "Camping",
				description: "camping is the best",
				destination: "rwenzori mountains",
				price: 430,
				duration: 7,
				discount: 20,
				status: 1
			},
			{
				id: 5,
				name: "Camping",
				description: "camping is the best",
				destination: "rwenzori mountains",
				price: 430,
				duration: 7,
				discount: 20,
				status: 1
			},
			{
				id: 6,
				name: "Camping",
				description: "camping is the best",
				destination: "rwenzori mountains",
				price: 430,
				duration: 7,
				discount: 20,
				status: 1
			}
		];
		const destinations: any = [
			{
				id: 1,
				destination: "Mbarara",
				destinationDesc: "hot",
				destinationStatus: 1
			},
			{
				id: 2,
				destination: "Kampala",
				destinationDesc: "hot",
				destinationStatus: 1
			},
			{
				id: 3,
				destination: "Kabala",
				destinationDesc: "hot",
				destinationStatus: 1
			},
			{
				id: 10,
				destination: "karamonja",
				destinationDesc: "hot",
				destinationStatus: 1
			}
		];
		const bookings: any = [
			{
				id: 3,
				fullName: "derrick mo",
				emailAddress: "derrickmo@gmail.com",
				tour: "rewenzori mounatain climbimg",
				travelDate: "11/03/2020",
				persons: 2,
				inquiry: "comming up soon",
				status: 1
			},
			{
				id: 1,
				fullName: "derrick mo",
				emailAddress: "derrickmo@gmail.com",
				tour: "rewenzori mounatain climbimg",
				travelDate: "11/03/2020",
				persons: 2,
				inquiry: "comming up soon",
				status: 1
			},
			{
				id: 4,
				fullName: "derrick mo",
				emailAddress: "derrickmo@gmail.com",
				tour: "rewenzori mounatain climbimg",
				travelDate: "11/03/2020",
				persons: 2,
				inquiry: "comming up soon",
				status: 1
			},
			{
				id: 5,
				fullName: "derrick mo",
				emailAddress: "derrickmo@gmail.com",
				tour: "rewenzori mounatain climbimg",
				travelDate: "11/03/2020",
				persons: 2,
				inquiry: "comming up soon",
				status: 1
			}
		];
		return { categories,tours,destinations,bookings };
	}

	genId(data:any[]){
		return data.length > 0 ? Math.max(... data
		.map(data => data.id )) + 1:0;
	}
}
