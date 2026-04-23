import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Laptops } from './components/laptops/laptops';

export const routes: Routes = [

    {path:'',component:Home},
    {path:'laptops', component:Laptops}

];
