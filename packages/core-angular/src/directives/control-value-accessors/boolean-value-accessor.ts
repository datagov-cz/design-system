import { Directive, HostListener, ElementRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueAccessor } from './value-accessor';

@Directive({
  selector: 'gov-form-checkbox,gov-form-switch',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: BooleanValueAccessorDirective,
      multi: true,
    },
  ],
})
export class BooleanValueAccessorDirective extends ValueAccessor {
  constructor(injector: Injector, el: ElementRef) {
    super(injector, el);
  }

  writeValue(value: boolean): void {
    this.el.nativeElement.checked = this.lastValue = value;
  }

  @HostListener('govChange', ['$event.target'])
  _handleGovChange(el: HTMLGovFormCheckboxElement | HTMLGovFormSwitchElement): void {
    this.handleValueChange(el, el.checked);
  }
}
