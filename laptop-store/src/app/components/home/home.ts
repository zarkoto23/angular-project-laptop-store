import { Component } from '@angular/core';
import { HeroSection } from '../laptops/categories/hero-section/hero-section';
import { Search } from '../laptops/categories/search/search';
// import { Categories } from '../categories/categories';
import { Products } from '../products/products';
import { SellSection } from '../sell-section/sell-section';
import { Categories } from '../laptops/categories/categories';

@Component({
  selector: 'app-home',
  imports: [HeroSection, Search, Categories, Products, SellSection ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
