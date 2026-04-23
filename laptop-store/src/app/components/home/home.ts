import { Component } from '@angular/core';
import { Products } from '../products/products';
import { SellSection } from '../sell-section/sell-section';

@Component({
  selector: 'app-home',
  imports: [Products, SellSection],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
