import { inject, Injectable } from "@angular/core";
import { SupabaseService } from "./supabaseAuth.service";
import { Observable } from "rxjs";
import { Laptop } from "../../shared/models/laptop.model";

@Injectable({
    providedIn:'root'
})

export class LaptopService{

    private supabaseService=inject(SupabaseService)
    private supabase=this.supabaseService.getSupabaseClient()



    getAll():Observable<Laptop[]>{
        const promise=this.supabase
        .from('laptops')
        .select('*')
    }

}