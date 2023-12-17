import { Pipe, PipeTransform } from '@angular/core';
import { currency } from './cyrrency';

@Pipe({
  name: 'customCurrency',
  pure: true
})
export class CurrencyPipe implements PipeTransform {

  transform(value: unknown, code: string, separator: string = ' '): unknown {
    return currency(value, code, separator)
  }
}
