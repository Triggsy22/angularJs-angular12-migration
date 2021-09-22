import angular from 'angular';
import {AngularComponent} from '../angular/angular.component'
import {downgradeComponent, downgradeInjectable, downgradeModule} from "@angular/upgrade/static";
import angularjsComponent from './angularjs.component.ajs';
import angularjsController from './angularjs.controller.ajs';

export default function(){
    angular
        .module('angularjsModule', [])
        .component('angularjsComponent', angularjsComponent())
        .controller('angularjsController', angularjsController)
        .directive('angularDirective', downgradeComponent({component: AngularComponent}) as angular.IDirectiveFactory)
}