import { Component, EventEmitter, Output, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  @Output() changeSidenavOpen = new EventEmitter<void>();

  @Input() test: any;

  constructor() {
    // let count = 0;
    // setInterval(()=> {
    //   count += 1;
    // }, 1000);
  }
}
