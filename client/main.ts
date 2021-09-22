import 'zone.js';
import 'reflect-metadata';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {setAngularJSGlobal, UpgradeComponent} from '@angular/upgrade/static';
import * as angular from 'angular';
import { default as AppModule } from './angular/angular.module';

import {UpgradeModule} from '@angular/upgrade/static';

import loadAnglarjsModule from './angularjs/angularjs.module.ajs';

setAngularJSGlobal(angular);

loadAnglarjsModule();

// Bootstrap using the UpgradeModule
platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
    console.log("Bootstrapping in Hybrid mode with Angular & AngularJS");
    const upgradeModule = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgradeModule.bootstrap(document.body, ['angularjsModule']);
});