import { Directive, HostListener, ElementRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueAccessor } from './value-accessor';

@Directive({
  selector: 'gov-form-input[input-type=number]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NumericValueAccessorDirective,
      multi: true,
    },
  ],
})
export class NumericValueAccessorDirective extends ValueAccessor {
  constructor(injector: Injector, el: ElementRef) {
    super(injector, el);
  }

  @HostListener('govInput', ['$event.target'])
  handleInputEvent(el: HTMLGovFormInputElement): void {
    this.handleValueChange(el, el.value);
  }

  registerOnChange(fn: (_: number | null) => void): void {
    super.registerOnChange((value: string) => {
      fn(value === '' ? null : parseFloat(value));
    });
  }
}
