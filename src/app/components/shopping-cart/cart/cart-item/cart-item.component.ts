import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: any
  @Input() allCartItems: any

  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  removeItem() {
    const arrayFiltered = this.allCartItems.filter(x => x.productId === this.cartItem.productId)[0]
    const index = this.allCartItems.indexOf(arrayFiltered)
    this.allCartItems.splice(index, 1)
    this.change.emit(this.allCartItems);
  }

}
