import { Inject, Injectable } from "@angular/core";
import { IProduct } from "../../shared/product.interface";
import { BehaviorSubject, Observable, catchError, map, of, tap } from "rxjs";
import { BASE_URL } from "../../shared/base-url/base-url.token";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

export interface IProductsDto {
    data: {
        items: IProduct[]
    }
}

export interface IProductDto {
    data: IProduct
}

@Injectable()
export class ProductsApiService {

    products$ = new BehaviorSubject<IProduct[] | null>(null);
    product$ = new BehaviorSubject<IProduct | null>(null);

    constructor(@Inject(BASE_URL) private readonly base_url: string,
                private readonly httpClient: HttpClient) { 
        this.httpClient.get<IProductsDto>(`${this.base_url}/products/suggestion`)
        .pipe(
            map(({data}) => data.items)
        ).subscribe((items) => {
            this.products$.next(items)
        });
    }

    loadProduct(id: string): Observable<IProduct | null> {
        console.log(id, 'ID')
        return this.httpClient.get<IProductDto>(`https://course-angular.javascript.ru/api/products/${id}`)
        .pipe(
            map(({data}) => data),
            catchError(error => {
                console.error(error, 'Ошибка загрузки продукта');
                return of(null);
            })
        )
    }

}