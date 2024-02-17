import { Injectable } from "@angular/core";
import { BrandApiService } from "./brands.api.service";
import { BehaviorSubject } from "rxjs";

export interface IBrands {
    data: string[]
}

@Injectable({
    providedIn: 'root'
})
export class BrandsStoreService {

    private readonly brandsStore$ = new BehaviorSubject<string[]>([])

    constructor(private readonly brandApiService: BrandApiService) {
        this.brandApiService.brands$.subscribe(brands => {
            this.brandsStore$.next(brands);
        })
    }

    get loadBrands() {
        return this.brandsStore$.asObservable();
    }


}