import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Laptops } from './components/laptops/laptops';
import { Catalog } from './components/catalog/catalog';
import { Register } from './components/register/register';
import { Login } from './components/login/login';
import { CreateNew } from './components/create-new/create-new';

export const routes: Routes = [

    {path:'',component:Home},
    {path:'laptops', component:Laptops},
    {path:'catalog', component:Catalog},
    {path:'register', component:Register},
    {path:'login', component:Login},
    {path:'create', component:CreateNew}




];
