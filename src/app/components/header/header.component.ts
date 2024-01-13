import { Component, EventEmitter, Output, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  @Output() menuClickOutput = new EventEmitter<void>();

  constructor() { }

  changeSidenavState() {
    this.menuClickOutput.emit();
  }
}
