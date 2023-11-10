import { ElementRef, Injector, Directive, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueAccessor } from './value-accessor';

@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: 'gov-form-select',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectValueAccessorDirective,
      multi: true,
    },
  ],
})
export class SelectValueAccessorDirective extends ValueAccessor {
  constructor(injector: Injector, el: ElementRef) {
    super(injector, el);
  }

  @HostListener('govChange', ['$event.target'])
  _handleChangeEvent(el: HTMLGovFormSelectElement): void {
    this.handleValueChange(el, el.value);
  }
}
