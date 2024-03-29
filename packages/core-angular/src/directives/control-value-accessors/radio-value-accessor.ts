import { ElementRef, Injector, Directive, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueAccessor } from './value-accessor';

@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: 'gov-form-radio',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RadioValueAccessorDirective,
      multi: true,
    },
  ],
})
export class RadioValueAccessorDirective extends ValueAccessor {
  constructor(injector: Injector, el: ElementRef) {
    super(injector, el);
  }

  // TODO(FW-2827): type (HTMLGovRadioElement and HTMLElement are both missing `checked`)
  @HostListener('govSelect', ['$event.target'])
  _handleGovSelect(el: any): void {
    this.handleValueChange(el, el.checked);
  }
}
