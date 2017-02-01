import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Iproduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: 'product-detail.component.html'

})
export class ProductDetailComponent implements OnInit{
    pageTitle: String = 'Product Detail';
    product: Iproduct;
    private sub: Subscription;
    private errorMessage;


    constructor(private _route: ActivatedRoute,
    private _productService: ProductService,
    private _router: Router){

    }

    ngOnInit(): void{
        let id = + this._route.snapshot.params['id'];
        
        
         this.getProductDet(id);
        
    }
    getProductDet(id: number) {
        this._productService.getProductDet(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }

    onBack(): void{
        this._router.navigate(['/products']);
    }
}