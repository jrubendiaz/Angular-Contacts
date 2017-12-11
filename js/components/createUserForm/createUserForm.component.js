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

        vm.$onInit = function() { };
        vm.$onChanges = function(changesObj) { };
        vm.$onDestroy = function() { };

        function createUser() {
            let newUser = addAuth().then(res => {
                firebaseProvider.newUserToDatabase(res);
                vm.user = res;
            })
        }
        function addAuth() {
            return firebaseProvider.newUser(vm.aux_user.email, vm.aux_user.pass).then(res => {
                let aux_user = {};
                aux_user.uid = res.uid;
                aux_user.email = res.email;
                return aux_user;
            });
        }
    }
})();