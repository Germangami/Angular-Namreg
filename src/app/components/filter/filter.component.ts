import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { BrandApiService } from 'src/app/services/brands-api/brands.api.service';
import { BrandsStoreService } from 'src/app/services/brands-api/brands.store';

export interface User {
  name: string
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  providers: [
    BrandApiService,
    BrandsStoreService
  ]
})
export class FilterComponent {
  brands$!: Observable<string[]>;
  brands: string[] = [];

  options: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
  filteredOptions!: Observable<User[]>;

  readonly filterForm = this.fb.group({
    search: '',
    brands: this.fb.array<boolean>([])
  })

  constructor(private readonly brand: BrandApiService, 
              private readonly brandsStoreService: BrandsStoreService,
              private readonly fb: FormBuilder) { }

  ngOnInit() {
    this.brands$ = this.brandsStoreService.loadBrands;
    this.brands$.subscribe(x => {
      if(x.length > 1) {
        const brandsControl: boolean[] = x.map(() => false);
        const brandsForm = this.fb.array(brandsControl);
  
        this.filterForm.setControl('brands', brandsForm)
      } 
    })
    this.filterForm.valueChanges.subscribe(x => console.log(x))
    this.filteredOptions
  }

  initBrandsForm(brands: any) {
    if(brands) {

    }
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

}
