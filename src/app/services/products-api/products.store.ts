import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ProductsApiService } from "./products.api.service";
import { IProduct } from "src/app/shared/product.interface";


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

    get currentProduct(): Observable<IProduct | null> {
        return this.currentProductStore$.asObservable();
    }

    currentProduct$(productId: string) {
        const productPreview = this.productsStore$.value?.find(({_id}) => _id === productId);
        this.currentProductStore$.next(productPreview || null);

        this.productsApiService
            .loadProduct(productId)
            .subscribe(product => {
                this.currentProductStore$.next(product)
            })
    }

}