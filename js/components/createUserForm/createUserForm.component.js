(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular
        .module('AngularContacts')
        .component('createUserForm', {
            templateUrl: '/js/components/createUserForm/createUserForm.html',
            controller: createUserFormController,
            controllerAs: 'vm',
            bindings: {
                user: '='
            },
        });

    createUserFormController.$inject = ['firebaseProvider'];
    function createUserFormController(firebaseProvider) {
        var vm = this;

        //Variables
        vm.aux_user = {
            email: "",
            pass: "",
        };

        //Functions
        vm.createUser = createUser;


        ////////////////

        vm.$onInit = function() {
            console.log(vm.user);
        };
        vm.$onChanges = function(changesObj) { };
        vm.$onDestroy = function() { };

        function createUser() {
            firebaseProvider.newUser(vm.aux_user.email, vm.aux_user.pass);
            vm.user = vm.aux_user;
        }
    }
})();