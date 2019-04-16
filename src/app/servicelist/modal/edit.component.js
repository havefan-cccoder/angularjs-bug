(function() {
    'use strict';

    angular
      .module("ennmoom")
      .component('editComponent', {
        templateUrl: "app/servicelist/modal/edit.html",
        bindings: {
          resolve: '<',
          close: '&',
          dismiss: '&'
        },
        controllerAs: 'vm',
        controller: ['toastr', editComponentCtrl]
      });

      function editComponentCtrl(toastr){
        var vm = this;
      }
})()
