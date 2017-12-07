(function() {
    'use strict';

    angular
        .module('AngularContacts')
        .controller('ContactProfileController', ContactProfileController);

    ContactProfileController.$inject = ['ContactProvider', '$routeParams'];
    function ContactProfileController(ContactProvider, $routeParams) {
        var vm = this;
        vm.user = {};


        activate();

        ////////////////

        function activate() {
            var id = $routeParams.id;
            vm.user = ContactProvider.get(id);
            console.log(vm.user);
        }
    }
})();