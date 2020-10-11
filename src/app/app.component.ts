import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'homework';

  products = [{
    id: 1,
    name: 'Product 1',
    price: 50
  }, {
    id: 2,
    name: 'Product 2',
    price: 100
  }, {
    id: 3,
    name: 'Product 3',
    price: 150
  }];
  
  searchProduct = '';
  
  productModel = {
    name: '',
    price: ''
  };

  addProduct() {
    const lastId = this.products[this.products.length-1].id + 1;
    this.products.push({id: lastId, name: this.productModel.name, price: +this.productModel.price});
  }
}
