import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {
  @ViewChild('drawer',{static: false})
  private readonly matDrover: MatDrawer | undefined;

  @ViewChild('listViewPort', {read: ViewContainerRef, static: true})
  private readonly listViewPort!: ViewContainerRef;

  @ContentChild('menuItems', {static: true})
  private readonly menuItems!: TemplateRef<unknown>;

  isView = true;

  isRed = false;

  constructor( private readonly changeDetectorRef: ChangeDetectorRef ) {

  }

  changeColor() {
    this.isRed = !this.isRed
  }

  toogleMatDraverState() {
    this.changeDetectorRef.markForCheck();
    this.matDrover?.toggle();
    this.isView = !this.isView;
  }

}
