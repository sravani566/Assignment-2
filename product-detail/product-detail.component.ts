import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  template: `<h3>you selected Product with id {{productId}}</h3>`,
  styleUrls: []
})
export class ProductDetailComponent implements OnInit {

  public productId; 

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
    let id= parseInt(this.route.snapshot.paramMap.get('id'));
    this.productId = id;
  }
}