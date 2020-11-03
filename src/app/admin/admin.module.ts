import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import {FlexLayoutModule} from '@angular/flex-layout';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DataTablesModule } from 'angular-datatables'


import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TourCategoryTableComponent } from './admin-schematics/tour-category-table/tour-category-table.component';
import { TourCategoryComponent } from './components/tour-category/tour-category.component';
import { CardComponent } from './admin-schematics/card/card.component';
import { LatestBookingsTableComponent } from './admin-schematics/latest-bookings-table/latest-bookings-table.component';
import { BookedActiveTourChartComponent } from './admin-schematics/booked-active-tour-chart/booked-active-tour-chart.component';
import { AddComponentComponent } from './display/add-component/add-component.component';
import { ViewComponentComponent } from './display/view-component/view-component.component';
import { AddTourCategoryComponent } from './components/add-tour-category/add-tour-category.component';
import { TourCategoryFormComponent } from './admin-schematics/tour-category-form/tour-category-form.component';
import { TourFormComponent } from './admin-schematics/tour-form/tour-form.component';
import { TourComponent } from './components/tour/tour.component';
import { DestinationComponent } from './components/destination/destination.component';
import { AddTourComponent } from './components/add-tour/add-tour.component';
import { AddDestinationComponent } from './components/add-destination/add-destination.component';
import { DestinationFormComponent } from './admin-schematics/destination-form/destination-form.component';
import { TourTableComponent } from './admin-schematics/tour-table/tour-table.component';
import { DestinationTableComponent } from './admin-schematics/destination-table/destination-table.component';
import { BookingComponent } from './components/booking/booking.component';
import { BookingTableComponent } from './admin-schematics/booking-table/booking-table.component';
import { ViewBookingComponent } from './components/view-booking/view-booking.component';



@NgModule({
	declarations: [
		AdminComponent,
		DashboardComponent,
		TourCategoryTableComponent, 
		TourCategoryComponent, 
		CardComponent, 
		LatestBookingsTableComponent, 
		BookedActiveTourChartComponent, 
		AddComponentComponent, 
		ViewComponentComponent, 
		AddTourCategoryComponent, 
		TourCategoryFormComponent, 
		TourFormComponent, 
		TourComponent, 
		DestinationComponent, 
		AddTourComponent, 
		AddDestinationComponent, 
		DestinationFormComponent, 
		TourTableComponent, 
		DestinationTableComponent, BookingComponent, BookingTableComponent, ViewBookingComponent
	],
	imports: [
		CommonModule,
		AdminRoutingModule,

		ReactiveFormsModule,
		ChartsModule,
		FlexLayoutModule,
		FontAwesomeModule,
		NgbModule,
		MDBBootstrapModule.forRoot(),
		NgxDatatableModule,
		DataTablesModule,

		A11yModule,
		ClipboardModule,
		CdkStepperModule,
		CdkTableModule,
		CdkTreeModule,
		DragDropModule,
		MatAutocompleteModule,
		MatBadgeModule,
		MatBottomSheetModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatCardModule,
		MatCheckboxModule,
		MatChipsModule,
		MatStepperModule,
		MatDatepickerModule,
		MatDialogModule,
		MatDividerModule,
		MatExpansionModule,
		MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatMenuModule,
		MatNativeDateModule,
		MatPaginatorModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatRadioModule,
		MatRippleModule,
		MatSelectModule,
		MatSidenavModule,
		MatSliderModule,
		MatSlideToggleModule,
		MatSnackBarModule,
		MatSortModule,
		MatTableModule,
		MatTabsModule,
		MatToolbarModule,
		MatTooltipModule,
		MatTreeModule,
		OverlayModule,
		PortalModule,
		ScrollingModule,
	]
})
export class AdminModule { }
