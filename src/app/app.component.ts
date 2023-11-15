import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  @ViewChild('sidenavComponent') 
  private readonly sidenav: SidenavComponent | undefined;

  title = 'an-namreg-shop';

  isShowSecond: boolean = false;

  appTest: any = 0;

  ngOnInit(): void {
    setTimeout(() => {
      this.isShowSecond = true;
    }, 5000);
    setInterval(()=> {
      this.appTest += 1;
    }, 1000)
  }

  appClick() {
    this.sidenav?.toogleMatDraverState();
  }

}
