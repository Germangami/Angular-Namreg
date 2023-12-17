import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { IProductImage } from '../product-image.interface';
import { BehaviorSubject, map, tap } from 'rxjs';


@Directive({
  selector: '[appCarousel]'
})
export class CarouselDirective implements OnInit, OnChanges  {

  currentIndex$ = new BehaviorSubject<number>(0);

  @Input() appCarousel!: IProductImage[];

  constructor(private readonly containerRef: ViewContainerRef,
              private readonly template: TemplateRef<any>) {

  }

  ngOnInit(): void {
    console.log(this.appCarousel, 'APP CAROUSEL')
    this.initView();
  }

  ngOnChanges({appCarouselOf}: SimpleChanges): void {
    if (appCarouselOf) {
      if (!this.appCarousel?.length) {
        this.containerRef.clear();
      }
      this.currentIndex$.next(0);

    }
  }

  initView() {
    this.currentIndex$.pipe(
      map(currentIndex => this.createContext(currentIndex))
    ).subscribe((context)=> {
      this.containerRef.clear();
      this.containerRef.createEmbeddedView(this.template, context)
    })
  }

  createContext(index: number) {
    if (this.appCarousel) {
      console.log('create CONTEXT')
      console.log({
        $implicit: this.appCarousel[index].url,
        index: index,
        next: () => {
          this.next();
        },
        back: ()=> {
          this.back();
        }
      }, 'CONTEXT OBJ');

      return {
        img: this.appCarousel[index].url,
        index: index,
        next: () => {
          this.next();
        },
        back: ()=> {
          this.back();
        }
      }
    }
    return null;
  }

  next() {
    const nextIndex = this.currentIndex$.value + 1;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const newIndex = nextIndex < this.appCarousel!.length ? nextIndex : 0;

    this.currentIndex$.next(newIndex);
  }

  back() {
    const previousIndex = this.currentIndex$.value - 1;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const newIndex = previousIndex >= 0 ? previousIndex : this.appCarousel!.length - 1;

    this.currentIndex$.next(newIndex);
  }

  
}
