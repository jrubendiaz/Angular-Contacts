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
        vm.edit = 'personal';
        vm.newContact = {
            name: "",
            email: "",
            phone: "",
            photo: "",
            favoriteList: {
                marvel:[],
                giphy: []
            }
        }

        // Own Functions
        vm.addContact = addContact;

        activate();

        ////////////////

        function activate() {
            vm.contacts = ContactProvider.getAll();
            console.log(vm.contacts);
        }
        function addContact() {
            console.log(vm.newContact);
            let contact = {
                name : vm.name || "Nombre aleatorio",
                email : vm.email || "aleatorio@correo.es",
                photo : vm.photo || "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=750&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                id : Date.now()
            }
            ContactProvider.add(vm.newContact);
            vm.contacts = ContactProvider.getAll();
        }
    }
})();