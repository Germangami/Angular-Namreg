import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CounterInputComponent,
      multi: true
    }
  ]

})
export class CounterInputComponent implements ControlValueAccessor {

  public counter: number = 0;

  private onChange!: (value: number) => void;
  private onTouch!: () => void;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {

  }

  increase() {
    this.counter++;
    this.onChange(this.counter);
    this.onTouch();
    this.changeDetectorRef.markForCheck();
    this.changeDetectorRef.detectChanges(); 
  }

  decrease() {
    this.counter--;
    this.onChange(this.counter);
    this.onTouch();
    this.changeDetectorRef.markForCheck();
    this.changeDetectorRef.detectChanges(); 
  }

  writeValue(value: number): void {
    this.counter = value;
    this.changeDetectorRef.detectChanges(); 
  }

  registerOnChange(cb: (value: number) => void): void {
    this.onChange = cb;
  }

  registerOnTouched(cb: () => void): void {
    this.onTouch = cb;
  }



}
