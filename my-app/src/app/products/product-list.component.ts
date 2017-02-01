import { Component, OnInit } from '@angular/core';
import { Iproduct } from './product';
import { ProductService } from './product.service';


@Component({
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 20;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;


    products: Iproduct[]; 

constructor(private _productService: ProductService){

}
toggleImage(): void {
    this.showImage = !this.showImage;
}
ngOnInit() : void{
    this._productService.getProduct()
    .subscribe(products => this.products = products,
    error => this.errorMessage = <any> error );

}

}