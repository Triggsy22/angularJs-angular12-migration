import {Directive, ElementRef, Injector, Input, SimpleChanges} from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

/*@Directive({
    selector: 'angularjs-directive'
})
export class AngularjsDirective extends UpgradeComponent {
    constructor(elementRef: ElementRef, injector: Injector) {
        super('angularjsComponent', elementRef, injector);
    }
}*/

/*
export const ng1DemoComponent = {
    selector: 'ng1Demo',
    template: 'Hello, {{ $ctrl.username }}!',
    bindings: {
        username: '<',
    },
    controller: class Ng1DemoComponent {
        username: string;
    },
};

@Directive({selector: ng1DemoComponent.selector})
export class AngularjsDirective extends UpgradeComponent {
    @Input() username: string;

    constructor(elementRef: ElementRef, injector: Injector) {
        super(ng1DemoComponent.selector, elementRef, injector);
    }
}*/

//todo: unbedingt das hier checken: https://stackblitz.com/edit/ngupgradestatic-playground?file=src%2Fng2%2Fng2-demo.component.ts
//  das ist ein simples beispiel das mit angularjs und angular funktioniert! selbst mit UpgradeComponent und dem laden im constructor