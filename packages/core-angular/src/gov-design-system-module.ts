import {CommonModule, DOCUMENT} from '@angular/common';
import {APP_INITIALIZER, ModuleWithProviders, NgModule, NgZone} from '@angular/core';
import { appInitialize } from './app-initialize';

import {DIRECTIVES} from './directives/proxies-list';
import {
    BooleanValueAccessorDirective,
    NumericValueAccessorDirective,
    RadioValueAccessorDirective,
    SelectValueAccessorDirective,
    TextValueAccessorDirective
} from "./directives/control-value-accessors";

const DECLARATIONS = [
    // generated proxies
    ...DIRECTIVES,

    // ngModel accessors
    BooleanValueAccessorDirective,
    NumericValueAccessorDirective,
    RadioValueAccessorDirective,
    SelectValueAccessorDirective,
    TextValueAccessorDirective,
];

@NgModule({
    declarations: DECLARATIONS,
    exports: DECLARATIONS,
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: appInitialize,
            multi: true,
            deps: [DOCUMENT, NgZone],
        },
    ],
    imports: [CommonModule],
})
export class GovDesignSystemModule {
    static forRoot(): ModuleWithProviders<GovDesignSystemModule> {
        return {
            ngModule: GovDesignSystemModule,
            providers: [],
        };
    }
}
