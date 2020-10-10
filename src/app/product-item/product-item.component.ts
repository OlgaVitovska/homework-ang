import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem;
  @Output() getTitle = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void { }

    addToCart(title) {
      console.log(title);
      this.getTitle.emit(title);
    }
  }
