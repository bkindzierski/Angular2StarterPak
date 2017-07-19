import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//
import { IProduct } from './product'
import { ProductService } from './product.service'

@Component({
    //selector: 'pm-products-details', <-- not needed if configured in routing
    templateUrl: './app/products/product-detail.component.html'
    //styleUrls:['app/products/product-list.component.css'] // <--array of styles
    
})

export class ProductDetailComponent implements OnInit {

    id: number;            
    product: IProduct;
    errorMessage:string;
    imageWidth: number = 50;
    imageMargin: number = 2;
    pageTitle:string = "Product Detail ";
    
    //private sub: any; <-- used for dependency, to call OnDestroy

    //multiple dependancy injection 
    constructor(private _routeParams: ActivatedRoute, 
                private _router: Router, 
                private _productService: ProductService){        
        //NONE of this works, seems to be deprecated from pluralsite
        //console.log('the parameter: ' + this._routeParams.get('id'));
        //let id = +this._routeParams.get('id');
        //this.pageTitle += `: ${id}`;       
    }

    ngOnInit(){
        // my version with a fine exxample below though
        this._routeParams.params.subscribe(params => {
             this.id = +params['id']; // (+) converts string 'id' to a number                
             // In a real app: dispatch action to load the details here.
        
        }); // end subscribe to observable

        //console.log('My id: ' + String(this.id));
        this.pageTitle += String(this.id);
        
        //retrieve the product here using observable 
        this._productService.getProductById(this.id).subscribe(
                                                product => this.product = product, 
                                                error=>this.errorMessage = <any>error);


        //THE FINE EXAMPLE HERE
        // this.sub = this.route.params.subscribe(params => {
        //     this.id = +params['id']; // (+) converts string 'id' to a number

        //     // In a real app: dispatch action to load the details here.
        // });
    }

    //ACTIVATING A ROUTE WITH CODE
    onBack():void {
        this._router.navigate(['/products']);
    }
} 