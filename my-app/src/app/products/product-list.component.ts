import { Component, OnInit } from '@angular/core';
import { Iproduct } from './product';
import { ProductService } from './product.service';


@Component({
    selector: 'pm-products',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 20;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;


    products: Iproduct[]; 

constructor(private _productService: ProductService){

}
toggleImage(): void {
    this.showImage = !this.showImage;
}
ngOnInit() : void{
    this.products = this._productService.getProduct();
}

}