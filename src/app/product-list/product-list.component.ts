import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  modeView = 'list';
  products = [{
    photo: 'http://placehold.it/400x250/000/fff',
    title: 'Product 1',
    description: 'Product description...',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi possimus fugit laudantium cupiditate quidem aut nisi et, obcaecati, iste quis ducimus ad minus laborum optio? Aperiam nobis voluptatum totam.',
    price: '$21.00'
  }, {
    photo: 'http://placehold.it/400x250/000/fff',
    title: 'Product 2',
    description: 'Product description...',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi possimus fugit laudantium cupiditate quidem aut nisi et, obcaecati, iste quis ducimus ad minus laborum optio? Aperiam nobis voluptatum totam.',
    price: '$25.00'
  }, {
    photo: 'http://placehold.it/400x250/000/fff',
    title: 'Product 3',
    description: 'Product description...',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi possimus fugit laudantium cupiditate quidem aut nisi et, obcaecati, iste quis ducimus ad minus laborum optio? Aperiam nobis voluptatum totam.',
    price: '$29.00'
  }, {
    photo: 'http://placehold.it/400x250/000/fff',
    title: 'Product 4',
    description: 'Product description...',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi possimus fugit laudantium cupiditate quidem aut nisi et, obcaecati, iste quis ducimus ad minus laborum optio? Aperiam nobis voluptatum totam.',
    price: '$33.00'
  }];

  title: string;

  productSelect = [];

  constructor() { }

  ngOnInit(): void {

  }
  showTitle(event) {
    console.log(event);
    this.title = event;
    this.productSelect.push(event);
  }

  deleteProduct(i) {
    this.productSelect.splice(i, 1);
  }

  changeView(mode) {
    this.modeView = mode;
  }
  
}
