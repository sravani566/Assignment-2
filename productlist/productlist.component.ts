import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  template: `
  <ul class="item">
  <li (click)="onSelect(product)"  *ngFor="let product of products">
    <span class="badge">{{product.id}}</span> {{product.name}}
  </li>
</ul>
  `,
  styles: []
})
export class ProductlistComponent implements OnInit {

  public products = [
    {"id": 1, "name": "Book"},
    {"id": 2, "name": "desk"},
    {"id": 3, "name": "Milk"},
    {"id": 4, "name": "Plant"},
    {"id": 5, "name": "Soap"}
  ]

  constructor(private rounter: Router) { }
  ngOnInit() {

  }

  onSelect(product){
    // from neviate from code to rooute we need router service
    this.rounter.navigate(['/products', product.id]);
  }
}


