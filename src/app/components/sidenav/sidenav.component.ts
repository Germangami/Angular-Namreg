import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, AfterViewInit {

  @ViewChild('drawer',{static: false})
  private readonly matDrover: MatDrawer | undefined;

  @ViewChild('test', {static: false})
  private readonly test: ElementRef | undefined;

  isView = true;

  ngOnInit() {
    console.log(this.test); 
  }

  ngAfterViewInit(): void {
    console.log(this.test);
  }



  // toogleMatDraverState() {
  //   this.matDrover?.toggle();
  // }

  // @ViewChild('drawer') 
  // private readonly matDrover: MatDrawer | undefined;

  toogleMatDraverState() {
    this.matDrover?.toggle();
    this.isView = !this.isView;
  }
}
