(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular
        .module('AngularContacts')
        .component('userList', {
            templateUrl: '/js/components/userList/userList.html',
            controller: UserListController,
            controllerAs: 'vm',
            bindings: {
                users: '=',
            },
        });

    UserListController.$inject = [];
    function UserListController() {
        var vm = this;


        ////////////////

        vm.$onInit = function() { };
        vm.$onChanges = function(changesObj) { };
        vm.$onDestroy = function() { };
    }
})();