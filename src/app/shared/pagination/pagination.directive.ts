import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Subject, map } from 'rxjs';
import { IProduct } from '../product.interface';

@Directive({
  selector: '[appPagination]'
})
export class PaginationDirective implements OnInit, OnChanges{
  @Input()
  showElements: number = 4;

  @Input()
  allProductList!: IProduct[];

  public groupedItems: any[] = [];
  private allProductGroupList: any[][] = []

  private readonly currentIndex$ = new BehaviorSubject<number>(0);
  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly template: TemplateRef<any>
  ) { }

  ngOnChanges({appPaginationOf}: SimpleChanges): void {
    if (appPaginationOf) {
      this.viewContainerRef.clear();
      this.updateView()
    }

    this.currentIndex$.next(0);

  }

  ngOnInit(): void {
    this.allProductGroupList = this.getGroupedItems(this.allProductList, this.showElements);
    
    this.initView();
  }

  initView() {
    this.currentIndex$.pipe(
      map((currentIndex) => this.createContext(currentIndex))
    ).subscribe((context) => {
      this.viewContainerRef.clear()
      this.viewContainerRef.createEmbeddedView(this.template, context)
    })
  }

  getGroupedItems(items: IProduct[], elementsSize: number): any[][] {
    const paginationChanksLength = Math.ceil(items.length / elementsSize);

    return Array.from({length: paginationChanksLength}).map((_, index) => {
        const sliceStart = index * elementsSize;

        return items.slice(sliceStart, sliceStart + elementsSize);
    });
}

  createContext(index: number) {
    return {
      productsGroup: this.allProductGroupList[index],
      index: index,
      next: () => {
        this.next();
      },
      back: () => {
        this.back();
      }
    }
  }

  updateView() {

  }

  next() {
    const newIndex = this.currentIndex$.getValue()
    this.currentIndex$.next(newIndex + 1)
  }
  
  back() {
    const previewIndex = this.currentIndex$.getValue()
    this.currentIndex$.next(previewIndex - 1);
  }
}
