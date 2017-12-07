(function() {
    'use strict';

    angular
        .module('AngularContacts')
        .controller('ContactsController', ContactsController);

    ContactsController.$inject = ['ContactProvider'];
    function ContactsController(ContactProvider) {
        var vm = this;

        // Own Variables
        vm.contacts = {};
        vm.edit = 'init';

        vm.newContact = {
            name: "", // update by name input
            email: "", // update by email input
            phone: "", // update by phone input
            photo: "", // update by photo input
            favoriteList: {
                marvel:[], //update by marvelManagerComponent
                giphy: [] //update by giphyManagerComponent
            }
        }

        // Own Functions
        vm.addContact = addContact;

        activate();

        ////////////////

        function activate() {
            //load users/contacts from ContactProvider (localStore)
            vm.contacts = ContactProvider.getAll();
        }
        function resetNewContact() {
            vm.newContact = {
                name: "", // update by name input
                email: "", // update by email input
                phone: "", // update by phone input
                photo: "", // update by photo input
                favoriteList: {
                    marvel:[], //update by marvelManagerComponent
                    giphy: [] //update by giphyManagerComponent
                }
            }
        }
        function addContact() {
            //add user/contact to localStore using ContactProvider add method
            ContactProvider.add(vm.newContact);
            //reload users/contacts from localStore using ContactProvider methods
            vm.contacts = ContactProvider.getAll();
            resetNewContact();
        }
    }
})();