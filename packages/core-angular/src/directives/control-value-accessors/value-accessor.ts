import { AfterViewInit, ElementRef, Injector, OnDestroy, Directive, HostListener } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';

// TODO(FW-2827): types

@Directive()
export class ValueAccessor implements ControlValueAccessor, AfterViewInit, OnDestroy {
  private onChange: (value: any) => void = () => {
    /**/
  };
  private onTouched: () => void = () => {
    /**/
  };
  protected lastValue: any;
  private statusChanges?: Subscription;

  constructor(protected injector: Injector, protected el: ElementRef) {}

  writeValue(value: any): void {
    this.el.nativeElement.value = this.lastValue = value;
  }

  /**
   * Notifies the ControlValueAccessor of a change in the value of the control.
   *
   * This is called by each of the ValueAccessor directives when we want to update
   * the status and validity of the form control. For example with text components this
   * is called when the govInput event is fired. For select components this is called
   * when the govChange event is fired.
   *
   * This also updates the Govic form status classes on the element.
   *
   * @param el The component element.
   * @param value The new value of the control.
   */
  handleValueChange(el: HTMLElement, value: any): void {
    if (el === this.el.nativeElement) {
      if (value !== this.lastValue) {
        this.lastValue = value;
        this.onChange(value);
      }
    }
  }

  @HostListener('govBlur', ['$event.target'])
  _handleBlurEvent(el: any): void {
    if (el === this.el.nativeElement) {
      this.onTouched();
    }
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.el.nativeElement.disabled = isDisabled;
  }

  ngOnDestroy(): void {
    if (this.statusChanges) {
      this.statusChanges.unsubscribe();
    }
  }

  ngAfterViewInit(): void {
    let ngControl;
    try {
      ngControl = this.injector.get<NgControl>(NgControl);
    } catch {
      /* No FormControl or ngModel binding */
    }

    if (!ngControl) {
      return;
    }

    /**
     * TODO FW-2787: Remove this in favor of https://github.com/angular/angular/issues/10887
     * whenever it is implemented.
     */
    const formControl = ngControl.control as any;
    if (formControl) {
      const methodsToPatch = ['markAsTouched', 'markAllAsTouched', 'markAsUntouched', 'markAsDirty', 'markAsPristine'];
      methodsToPatch.forEach((method) => {
        if (typeof formControl[method] !== 'undefined') {
          const oldFn = formControl[method].bind(formControl);
          formControl[method] = (...params: any[]) => {
            oldFn(...params);
          };
        }
      });
    }
  }
}
