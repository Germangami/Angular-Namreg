import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { IProductImage } from '../product-image.interface';
import { BehaviorSubject, map, tap } from 'rxjs';


@Directive({
  selector: '[appCarousel]'
})
export class CarouselDirective implements OnChanges, OnInit {

  @Input() appCarouselOf: IProductImage[] | undefined;

  currentIndex = new BehaviorSubject<number>(0);

  constructor(private template: TemplateRef<any>, 
              private viewContainerRef: ViewContainerRef) {
    
  }

  ngOnChanges({appCarouselOf}: SimpleChanges): void {
    if (appCarouselOf) {
      this.updateView();
    }
  }

  ngOnInit(): void {
    this.listenCurrentIndex();
  }

  updateView() {
    this.viewContainerRef.clear();
    this.currentIndex.next(0);
  }

  listenCurrentIndex() {
    this.currentIndex
    .pipe(
      map((item: any) => this.getCurrentIndex(item))
    ).subscribe(contex => {
       this.viewContainerRef.clear();
      this.viewContainerRef.createEmbeddedView(this.template, contex);
    })
  }

  getCurrentIndex(currentIndex: number): any {
    return {
      $implicit: this.appCarouselOf![currentIndex],
      index: currentIndex,
      appCarouselOf: this.appCarouselOf,
      next: () => {
        this.next();
      },
      back: () => {
        this.back();
      }
    }
  }

  createView(img: IProductImage) {
    const context = {$implicit: img};
    this.viewContainerRef.createEmbeddedView(this.template, context)
  }

  next() {
    const nextIndex = this.currentIndex.value + 1;
    const newIndex = nextIndex < this.appCarouselOf!.length ? nextIndex : 0;
    this.currentIndex.next(newIndex);
  }

  back() {
    const previousIndex = this.currentIndex.value - 1;
    const newIndex = previousIndex >= 0 ? previousIndex : this.appCarouselOf!.length -1;
    this.currentIndex.next(previousIndex);
  }
 
}
