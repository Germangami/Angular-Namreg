import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IProduct } from "../shared/product.interface";
import { ProductsApiService } from "./products.api.service";


@Injectable()
export class ProductsStore {
    
    private readonly productsStore$ = new BehaviorSubject<IProduct[] | null>(null);
    private readonly currentProductStore$ = new BehaviorSubject<IProduct | null>(null);

    constructor(private productsApiService: ProductsApiService) { 
        this.productsApiService.products$.subscribe(products => {
            this.productsStore$.next(products);
        })
    }

    get products$(): Observable<IProduct[] | null> {
        return this.productsStore$.asObservable();
    }

    get currentProduct$(): Observable<IProduct | null> {
        return this.currentProductStore$.asObservable();
    }

}