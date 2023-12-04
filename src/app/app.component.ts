import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { Observable, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef | undefined;


  @ViewChild('myTemplate', {read: TemplateRef})
  private readonly myTemplateTest!: TemplateRef<any>;

  @ViewChild('sidenavComponent') 
  private readonly sidenav: SidenavComponent | undefined;

  title = 'an-namreg-shop';

  data$!: Observable<number>;
  data!: number;

  myDate = new Date(1961, 3, 12);
  number = 3.1415;
  money = 1000.59;

  isShowSecond: boolean = false;

  appTest: {age: number} = {age: 32};

  asyncValue!: Observable<{age: number}>

  constructor(private changeDetectorRef: ChangeDetectorRef, private viewContainerRef: ViewContainerRef) {

  }

  ngOnInit(): void {
    this.asyncValue = interval(1000).pipe(
      take(10),
      map(x => ({age: x}))
    )
    setTimeout(() => {
      this.createTemplate();
    }, 5000)
  }

  createTemplate() {
    if (this.container && this.myTemplateTest) {
      this.container.clear();
      this.container.createEmbeddedView(this.myTemplateTest);
    }
  }

  appClick() {
    this.sidenav?.toogleMatDraverState();
  }

}
