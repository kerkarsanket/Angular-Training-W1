import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  productId;
  itemId;
  item;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('productId');
      this.product = products[+params.get('productId')];
      this.itemId = params.get('itemId');
      this.item = this.product.productList[+params.get('itemId')];

      console.log(JSON.stringify(this.product));
      console.log(JSON.stringify(this.item));
    });
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}