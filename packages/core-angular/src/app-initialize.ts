import { NgZone } from '@angular/core';
import { applyPolyfills, defineCustomElements } from '@gov-design-system-ce/components/loader';

// import { Config } from './providers/config';

// TODO(FW-2827): types

export const appInitialize = (doc: Document, zone: NgZone) => {
  return (): any => {
    const win: Window | undefined = doc.defaultView as any;
    if (win && typeof (window as any) !== 'undefined') {
      const aelFn =
        '__zone_symbol__addEventListener' in (doc.body as any) ? '__zone_symbol__addEventListener' : 'addEventListener';

      return applyPolyfills().then(() => {
        return defineCustomElements(win, {
          exclude: [],
          syncQueue: true,
          jmp: (h: any) => zone.runOutsideAngular(h),
          ael(elm, eventName, cb, opts) {
            (elm as any)[aelFn](eventName, cb, opts);
          },
          rel(elm, eventName, cb, opts) {
            elm.removeEventListener(eventName, cb, opts);
          },
        });
      });
    }
  };
};
