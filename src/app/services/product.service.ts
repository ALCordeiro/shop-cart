import { Injectable } from '@angular/core';

import { Product } from '../models/product'

import data from './products.json'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = []

  constructor() { }

  getProducts(): Product[] {
    for (let i in data.products) {
      this.products.push(new Product(
        data.products[i].id,
        data.products[i].sku,
        data.products[i].title,
        data.products[i].description,
        data.products[i].price,
        data.products[i].availableSizes,
        data.products[i].style,
        data.products[i].installments,
        data.products[i].currencyId,
        data.products[i].currencyFormat,
        data.products[i].isFreeShipping
      ))
    }
    return this.products
  }
}
