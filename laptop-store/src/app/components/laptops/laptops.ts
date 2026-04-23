import { Component } from '@angular/core';
import { HeroSection } from './hero-section/hero-section';
import { Categories } from './categories/categories';
import { Search } from './search/search';

@Component({
  selector: 'app-laptops',
  imports: [HeroSection, Categories,Search],
  templateUrl: './laptops.html',
  styleUrl: './laptops.css',
})
export class Laptops {}
