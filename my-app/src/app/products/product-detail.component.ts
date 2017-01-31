import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from './product';

@Component({
    templateUrl: 'product-detail.component.html'

})
export class ProductDetailComponent{
    pageTitle: String = 'Product Detail';
    product: Iproduct;

    constructor(private _route: ActivatedRoute){}

    ngOnInit(): void{
        let id = + this._route.snapshot.params['id'];
        this.pageTitle += ':${id}';
    }
}