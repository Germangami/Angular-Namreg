import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  title = 'an-namreg-shop';

  @ViewChild('sidenavComponent') 
  private readonly sidenav: SidenavComponent | undefined;


  constructor() { }

  onCLick() {
    this.sidenav?.toogleMatDraverState();
  }

}
