import { ChangeDetectionStrategy, Component, Inject, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ProductsStore } from './services/products.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  title = 'an-namreg-shop';

  @ViewChild('sidenavComponent') 
  private readonly sidenav: SidenavComponent | undefined;


  constructor(private productStore: ProductsStore ) { }

  ngOnInit(): void {
    this.productStore.products$.subscribe(x => console.log(x, '1!@*#^&!*(@#&!*(@'))
  }

  onCLick() {
    this.sidenav?.toogleMatDraverState();
  }

}
