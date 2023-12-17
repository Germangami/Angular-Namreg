import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { SidenavComponent } from './components/sidenav/sidenav.component';

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

  constructor() { }
  
  ngOnInit(): void {
  }


  appClick() {
    this.sidenav?.toogleMatDraverState();
  }



}
