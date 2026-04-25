import { Component } from '@angular/core';
import { ProductCard } from "./product-card/product-card";
import { SupabaseService } from '../../services/supabase.service';
import { Laptop } from '../../models/laptop.model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [ProductCard, AsyncPipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products$: Observable<Laptop[]>;

  constructor(private supabaseService: SupabaseService) {
    this.products$ = this.supabaseService.getLatestProducts(5);
  }
}