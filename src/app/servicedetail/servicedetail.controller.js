(function (){
  'use strict';
  angular
    .module("ennmoom")
    .controller('ServiceDetailController', ['$state', '$location',  ServiceDetailController]);

    function ServiceDetailController($state, $location) {
        var vm = this;
        vm.fileLsit = [
          "第一项","第二项","第三项"
        ]
    }

})()
