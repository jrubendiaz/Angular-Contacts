(function() {
    'use strict';

    angular
        .module('Angular-Contacts')
        .controller('ContactsController', ContactsController);

    ContactsController.$inject = ['ContactsProvider'];
    function ContactsController(ContactsProvider) {
        var vm = this;
        vm.contacts = {};

        activate();

        ////////////////

        function activate() {
            ContactsProvider.getAll().then(loadContacts, manageError);
         }
         function loadContacts(contacts) {
             vm.contacts = contacts;
         }
         function manageError(e) {
             console.log("Algo ha ido mal: " + e);
         }
    }
})();