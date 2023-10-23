import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('sidenavComponent') 
  private readonly sidenav: SidenavComponent | undefined;

  title = 'an-namreg-shop';

  isShowSecond: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.isShowSecond = true;
    }, 5000)
  }

  appClick() {
    this.sidenav?.toogleMatDraverState();
  }

}
