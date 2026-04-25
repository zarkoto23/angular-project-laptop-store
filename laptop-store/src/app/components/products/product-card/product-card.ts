import { Component, Input } from '@angular/core';
import { Laptop } from '../../../models/laptop.model';


@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product!: Laptop;
}