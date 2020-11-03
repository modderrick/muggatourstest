import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrontComponent } from './front.component';
import { IndexComponent } from './index/index.component';
import { TourComponent } from './tour/tour.component';
import { ToursComponent } from './tours/tours.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogArticleComponent } from './blog-article/blog-article.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [

	{ path: '',
		component: FrontComponent,
		children:[
			{ path: 'index', component: IndexComponent},
			{ path: 'tour', component: TourComponent},
			{ path: 'tours', component: ToursComponent },
			{ path: 'blog-page', component: BlogPageComponent},
			{ path: 'blog-article', component: BlogArticleComponent},
			{ path: 'about', component: AboutComponent},
			{ path: 'contact', component: ContactComponent}
		] 
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
