import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IProduct } from "../shared/product.interface";
import { ProductsApiService } from "./products.api.service";


@Injectable()
export class ProductsStore {
    
    private readonly productsStore$ = new BehaviorSubject<IProduct[] | null>(null);

    get products$(): Observable<IProduct[] | null> {
        return this.productsStore$.asObservable();
    }

    constructor(private productsApiService: ProductsApiService) { 
        this.productsApiService.products$.subscribe(products => {
            this.productsStore$.next(products);
        })
    }

}