import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems = []
  cartTotal = 0

  constructor(private msg: MessengerService) { }

  ngOnInit() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product)
    })
  }

  addProductToCart(product: Product) {

    let productExists = false

    for (let item in this.cartItems) {
      if (this.cartItems[item].productId === product.id) {
        this.cartItems[item].qty++
        productExists = true
        break;
      }
    }

    if (!productExists) {
      this.populateCartArray(product)
    }

    this.sumTotal()
  }

  sumTotal() {
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

  countChange(event) {
    this.sumTotal()
  }

  populateCartArray(product) {
    this.cartItems.push({
      productId: product.id,
      productName: product.title,
      qty: 1,
      price: product.price,
      style: product.style,
      availableSizes: product.availableSizes
    })
  }
}
