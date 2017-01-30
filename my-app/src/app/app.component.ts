import { Component } from '@angular/core';
import { ProductService } from './products/product.service';
@Component({
  selector: 'app-root',
  template: `
            <div>
              <h1>{{title}}</h1>
              <pm-products></pm-products>
            </div>
            `,
   providers: [ProductService]         
})
export class AppComponent {
  title = "Acme product Management";
}
