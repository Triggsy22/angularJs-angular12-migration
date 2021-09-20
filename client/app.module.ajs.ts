import angular from 'angular';

const MODULE_NAME = 'justATestModule';
export default MODULE_NAME;

angular.module(MODULE_NAME, [])
    .component('justATestComponent', {
        template: '<p>Hello World</p>'
    })

