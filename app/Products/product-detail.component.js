"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_service_1 = require("./product.service");
var ProductDetailComponent = (function () {
    //private sub: any; <-- used for dependency, to call OnDestroy
    //multiple dependancy injection 
    function ProductDetailComponent(_routeParams, _router, _productService) {
        this._routeParams = _routeParams;
        this._router = _router;
        this._productService = _productService;
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.pageTitle = "Product Detail ";
        //NONE of this works, seems to be deprecated from pluralsite
        //console.log('the parameter: ' + this._routeParams.get('id'));
        //let id = +this._routeParams.get('id');
        //this.pageTitle += `: ${id}`;       
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // my version with a fine exxample below though
        this._routeParams.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number                
            // In a real app: dispatch action to load the details here.
        }); // end subscribe to observable
        //console.log('My id: ' + String(this.id));
        this.pageTitle += String(this.id);
        //retrieve the product here using observable 
        this._productService.getProductById(this.id).subscribe(function (product) { return _this.product = product; }, function (error) { return _this.errorMessage = error; });
        //THE FINE EXAMPLE HERE
        // this.sub = this.route.params.subscribe(params => {
        //     this.id = +params['id']; // (+) converts string 'id' to a number
        //     // In a real app: dispatch action to load the details here.
        // });
    };
    //ACTIVATING A ROUTE WITH CODE
    ProductDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/products']);
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            //selector: 'pm-products-details', <-- not needed if configured in routing
            templateUrl: './app/products/product-detail.component.html'
            //styleUrls:['app/products/product-list.component.css'] // <--array of styles
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            product_service_1.ProductService])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map