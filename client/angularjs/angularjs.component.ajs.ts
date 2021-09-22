export default function(){
    return {
        controller: 'angularjsController',
        controllerAs: 'vm',
        restrict: 'E',
        template: require('./angularjs.module.ajs.html').default,
    };
}