(function() {
  'use strict';

  angular
    .module('ennmoom')
    .config(['$stateProvider', '$urlRouterProvider',routerConfig]);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('servicedetail',{
        url: '/servicedetail',
        templateUrl: 'app/servicedetail/servicedetail.html',
        controller: 'ServiceDetailController',
        controllerAs: 'vm'
      })
      .state('servicelist',{
        url: '/servicelist',
        templateUrl: 'app/servicelist/servicelist.html',
        controller: 'ServiceListController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('servicelist');
  }

})();
