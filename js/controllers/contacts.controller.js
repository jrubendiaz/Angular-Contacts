(function() {
    'use strict';

    angular
        .module('AngularContacts')
        .controller('ContactsController', ContactsController);

    ContactsController.$inject = ['ContactProvider'];
    function ContactsController(ContactProvider) {
        var vm = this;

        // Variables
        vm.form = {};
        vm.contacts = {};

        // Functions
        vm.addContact = addContact;

        activate();

        ////////////////

        function activate() {
            vm.contacts = ContactProvider.getAll();
         }
         function addContact() {
             let contact = {
                 name : vm.form.name || "Nombre aleatorio",
                 email : vm.form.email || "aleatorio@correo.es",
                 photo : vm.form.photo || "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=750&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                 id : Date.now()
             }
             ContactProvider.add(contact);
         }
    }
})();