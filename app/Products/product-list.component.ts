
import { Component,OnInit } from '@angular/core'; 
import { IProduct } from './product'
import { ProductService } from './product.service'
//import { ProductFilterPipe } from './product-filter.pipe' <-- put in app.module.ts


@Component({
    //selector: 'pm-products', <-- configured in routes
    templateUrl: './app/products/product-list.component.html',
    styleUrls:['app/products/product-list.component.css'] // <--array of styles
    //pipes: [ProductFilterPipe] <-- put in app.module.ts
})

export class ProductListComponent implements OnInit{
      
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false; 
    listFilter: string;
    products: IProduct[]; //<-- list moved in service 
    errorMessage:string;

   // private _productService;    
    // constructor(productService: ProductService){
    //     _productService = productService;
    // }       
    //constructor to inject the dependency
    constructor(private _productService: ProductService){  //<--** shorthand to above constructor code         
    }

    //
    ngOnInit() : void{
        //console.log('In OnInit');
        //this.products =  this._productService.getProducts(); <-- old code
        this._productService.getProducts().subscribe(
                                                products => this.products = products, 
                                                error=>this.errorMessage = <any>error)
    }

    //
    toggleImage():void {
        this.showImage = !this.showImage;         
    }

    //
    onRatingClicked(message: string) :void{
        this.pageTitle = 'Product List: ' + message;
    }

}