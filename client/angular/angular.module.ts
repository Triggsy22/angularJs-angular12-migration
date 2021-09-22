import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

import { AngularComponent } from './angular.component';

@NgModule({
    //bootstrap:[AngularComponent],//hier darf nicht gebootstraped werden, weil sonst ngDoBootstrap() (das laden von angularjs) nicht ausgeführt wird!
    declarations:[
        AngularComponent,
    ],
    entryComponents: [
        AngularComponent,
    ],
    imports: [
        BrowserModule,
        UpgradeModule //zwingend erforderlich
    ],
})
export default class AngularModule {
    constructor(private upgrade: UpgradeModule) { }

    ngDoBootstrap() {
        console.log("Bootstrapping AngularJS");
        this.upgrade.bootstrap(document.body, ['angularjsModule'], { strictDi: true });
    }
}