import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx'; //Load all features;
import { RouterModule,Routes } from '@angular/router';


// custom components
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { StarComponent } from './shared/star.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { ProductService } from './products/product.service';
import { WelcomeComponent } from './home/welcome.component';

// put routes here
const appRoutes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailComponent }, 
];

@NgModule({
  imports: [ 
    //for routing in angular 2
    RouterModule.forRoot( 
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,FormsModule,HttpModule,RouterModule ],//<-- other imports here

    declarations: [ AppComponent, ProductListComponent, ProductFilterPipe, StarComponent, WelcomeComponent,ProductDetailComponent], 
    providers: [ ProductService ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
