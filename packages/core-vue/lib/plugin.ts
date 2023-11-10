/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
// @ts-ignore
import { Plugin } from 'vue';
import { defineCustomElements, applyPolyfills } from '@gov-design-system-ce/components/loader';

export const ComponentLibrary: Plugin = {
  async install() {
    if (typeof (window as any) !== 'undefined') {
      await applyPolyfills();
      await defineCustomElements(window, {
        ce: (eventName: string, opts: any) => new CustomEvent(eventName.toLowerCase(), opts),
      } as any);
    }
  },
};
