import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

import { AngularComponent } from './angular.component';
import {AngularjsDirective} from "./angularjs.directive";

@NgModule({
    bootstrap:[AngularComponent],
    declarations:[
        AngularComponent,
        AngularjsDirective
    ],
    entryComponents: [
        AngularComponent
    ],
    imports: [
        BrowserModule,
        UpgradeModule //zwingend erforderlich
    ],
})
export default class AngularModule {
    ngDoBootstrap(){
    }
}