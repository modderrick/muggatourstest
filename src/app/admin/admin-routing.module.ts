import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddDestinationComponent } from './components/add-destination/add-destination.component';
import { AddTourCategoryComponent } from './components/add-tour-category/add-tour-category.component';
import { AddTourComponent } from './components/add-tour/add-tour.component';
import { BookingComponent } from './components/booking/booking.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DestinationComponent } from './components/destination/destination.component';
import { TourCategoryComponent } from './components/tour-category/tour-category.component';
import { TourComponent } from './components/tour/tour.component';

const routes: Routes = [
  { path: '', 
		component: AdminComponent,
		children: [
			{ path: 'dashboard',component: DashboardComponent},
			{ path: 'tour-category', component: TourCategoryComponent},
			{ path: 'add-tour-category', component: AddTourCategoryComponent},
			{ path: 'tours', component: TourComponent},
			{ path: 'add-tour',component: AddTourComponent},
			{ path: 'destination', component: DestinationComponent},
			{ path: 'add-destination', component: AddDestinationComponent},
			{ path: 'booking', component: BookingComponent}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
