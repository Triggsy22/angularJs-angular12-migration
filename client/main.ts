import * as angular from 'angular';
import 'zone.js';
import 'reflect-metadata';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { setAngularJSGlobal } from '@angular/upgrade/static';
import { default as AngularModule } from './angular/angular.module';

import loadAnglarjsModule from './angularjs/angularjs.module.ajs';

setAngularJSGlobal(angular);

loadAnglarjsModule();

// Bootstrap using the UpgradeModule
platformBrowserDynamic().bootstrapModule(AngularModule);