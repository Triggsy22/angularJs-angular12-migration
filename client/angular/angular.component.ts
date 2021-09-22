import { Component } from '@angular/core';

@Component({
    selector: 'angular-component',
    template: require('./angular.component.html').default
})
export class AngularComponent {
    angularHand = ' and i got loaded from AngularJs';
}