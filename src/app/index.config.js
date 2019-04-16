(function() {
  'use strict';

  angular
    .module('ennmoom')
    .config(['toastrConfig','$httpProvider','$windowProvider',config]);


  /** @ngInject */
  function config(toastrConfig,$httpProvider,$windowProvider) {

    var user = angular.fromJson(decodeURIComponent($windowProvider.$get().sessionStorage.getItem('userInfo')));
    if(user){
      $httpProvider.defaults.headers.common['Authorization'] = 'Bearer '+user.token;
    }

    $httpProvider.defaults.withCredentials = true;


    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 6000;
    toastrConfig.positionClass = 'toast-bottom-right';
    toastrConfig.progressBar = true;
    toastrConfig.maxOpened = 6;
    toastrConfig.closeButton = true;
    toastrConfig.onShown = function () {
      var audio = document.getElementById('sound-tip');
      if(audio && audio.pause){
        audio.pause();
      }
      audio.play();
    };



  }

})();
