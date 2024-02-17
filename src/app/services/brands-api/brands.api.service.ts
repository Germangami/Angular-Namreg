import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, take, tap } from "rxjs";

export interface IBrands {
    data: string[]
}

@Injectable({
    providedIn: 'root'
})
export class BrandApiService {

    brands$ = new BehaviorSubject<string[]>([])

    constructor(private readonly http: HttpClient) { 
        this.http.get<IBrands>(`https://course-angular.javascript.ru/api/brands`).pipe(
            map(brands => brands.data),
            take(10)
        ).subscribe(brands => {
            this.brands$.next(brands);
        })
    }
}