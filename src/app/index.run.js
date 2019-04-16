(function() {
  'use strict';

  angular
    .module('ennmoom')
    .run(['$window','$sessionStorage',runBlock]);
  /** @ngInject */
  function runBlock($window,$sessionStorage) {
    $window.addEventListener('unload', function(event) {
      var USERINFO = angular.fromJson(decodeURIComponent($sessionStorage.get('userInfo')));
      $window.navigator.sendBeacon('/master/metadata/log/remain', USERINFO?USERINFO.yhbh:'');
    });
  }
})();
