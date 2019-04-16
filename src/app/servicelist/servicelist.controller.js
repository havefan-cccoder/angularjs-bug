(function (){
  'use strict';
  angular
    .module("ennmoom")
    .controller('ServiceListController', ['$state', '$uibModal', 'toastr',ServiceListController]);

    function ServiceListController($state, $uibModal, toastr) {
        var vm = this;
        vm.serviceList = [
          {
            serviceName:'第一个'
          },
          {
            serviceName:'第二个'
          }
        ]

        vm.openDetailPage = function() {
          var url = $state.href("servicedetail");
          window.open(url);
        };
        vm.openEditModal = function() {
            $uibModal.open({
                backdrop: 'static',
                component: 'editComponent',
                resolve: {
                }
            });
        }

    }

})()
