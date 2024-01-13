import { Inject, Injectable } from "@angular/core";
import { IProduct } from "../shared/product.interface";
import { productsMock } from "../shared/products.mock";
import { BehaviorSubject, Observable, delay, map, of } from "rxjs";
import { BASE_URL } from "../shared/base-url/base-url.token";
import { HttpClient } from "@angular/common/http";

export interface IProductDto {
    data: {
        items: IProduct[]
    }
}

@Injectable()
export class ProductsApiService {

    products$ = new BehaviorSubject<IProduct[] | null>(null);

    constructor(@Inject(BASE_URL) private readonly base_url: string,
                private readonly httpClient: HttpClient ) { 

        this.httpClient.get<IProductDto>(`${this.base_url}/products/suggestion`)
        .pipe(
            map(({data}) => data.items)
        ).subscribe((items) => {
            this.products$.next(items)
        })

    }

}