(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular
        .module('AngularContacts')
        .component('userProfile', {
            templateUrl: '/js/components/userProfile/userProfile.html',
            controller: UserProfileController,
            controllerAs: 'vm',
            bindings: {
                user: '=',
            },
        });

    UserProfileController.$inject = [];
    function UserProfileController() {
        var vm = this;

        ////////////////

        vm.$onInit = function() { };
        vm.$onChanges = function(changesObj) { };
        vm.$onDestroy = function() { };
    }
})();