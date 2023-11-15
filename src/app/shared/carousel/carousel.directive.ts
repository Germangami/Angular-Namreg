import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { IProductImage } from '../product-image.interface';
import { BehaviorSubject, map, tap } from 'rxjs';


@Directive({
  selector: '[appCarousel]'
})
export class CarouselDirective implements OnChanges, OnInit {
  // currentIndex: number = 0;

  // @Input() set appCarouselOf(images: IProductImage[] | undefined) {
  //   this.viewContainer.clear();
  //   this.currentIndex = 0;
  //   if (images && images.length > 0) {
  //     this.createView(images[this.currentIndex]);
  //   }
  // };

  // constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) {

  // }

  // createView(img: IProductImage) {
  //   const context = {$implicit: img};
  //   this.viewContainer.createEmbeddedView(this.template, context);
  // }

  // getCurrentIndex(currentIndex: number) {
  //   return {
  //     $implicit: this.appCarouselOf![currentIndex],
  //     index: currentIndex,
  //     appCarouselOf: this.appCarouselOf
  //   }
  // }

  @Input() appCarouselOf: IProductImage[] | undefined;

  currentIndex = new BehaviorSubject<number>(0);

  constructor(private template: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
    
  }

  ngOnChanges({appCarouselOf}: SimpleChanges): void {
    if (appCarouselOf) {
      // console.log(appCarouselOf, 'CHANGE')
      this.updateView();
    }
  }

  ngOnInit(): void {

    // console.log(this.appCarouselOf, 'appCarouselOf');
    // console.log(this.template, 'TEMPLATE', this.viewContainerRef, 'viewContainerRef');
    this.listenCurrentIndex();
  }

  updateView() {
    this.viewContainerRef.clear();
    this.currentIndex.next(0);
  }

  listenCurrentIndex() {
    this.currentIndex
    .pipe(
      tap(x => console.log(x, 'tap')),
      map((item: any) => this.getCurrentIndex(item))
    ).subscribe(contex => {
      // console.log(contex, 'CONTEXT')
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
    const context = {$implicit: img}
    this.viewContainerRef.createEmbeddedView(this.template, context)
  }

  next() {
    const newIndex = this.currentIndex.value + 1;
    this.currentIndex.next(newIndex);
  }

  back() {
    const previousIndex = this.currentIndex.value - 1;
    this.currentIndex.next(previousIndex);
  }
 
}
