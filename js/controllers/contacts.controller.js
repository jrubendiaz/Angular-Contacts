(function() {
    'use strict';

    angular
        .module('AngularContacts')
        .controller('ContactsController', ContactsController);

    ContactsController.$inject = ['ContactProvider', 'firebaseProvider', '$scope'];
    function ContactsController(ContactProvider, firebaseProvider, $scope) {
        var vm = this;

        // Own Variables
        vm.contacts = [];
        vm.user = {};
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
        vm.addTest = addTest;
        vm.logout = logout;

        activate();

        ////////////////

        function activate() {
            vm.contacts = firebaseProvider.getAll();
            // Testing create user in firebase
            //firebaseProvider.newUser("Pepe@correo.es", "45jjaleatorio");

            /*
            load users/contacts from ContactProvider (localStore)
            vm.contacts = ContactProvider.getAll();
            */
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                  // User is signed in.
                  vm.user.email = user.email;
                  vm.user.uid = user.uid;
                  // ...
                } else {
                  // User is signed out.
                  // ...
                }
              });
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
        function addTest() {
            vm.newContact = {
                name: "Usuario test", // update by name input
                email: "test@correo.es", // update by email input
                phone: "666666666", // update by phone input
                photo: "https://images.unsplash.com/photo-1508247489384-8a5d237ac250?auto=format&fit=crop&w=400&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D", // update by photo input
                favoriteList: {
                    marvel:[], //update by marvelManagerComponent
                    giphy: [] //update by giphyManagerComponent
                }
            }
            addContact();
        }
        function addContact() {
            //add user/contact to localStore using ContactProvider add method
            ContactProvider.add(vm.newContact);
            //reload users/contacts from localStore using ContactProvider methods
            vm.contacts = ContactProvider.getAll();
            resetNewContact();
        }
        function logout() {
            firebaseProvider.logout().then(res => {
                $scope.$apply(() => {
                    res ? vm.user = {} : "";
                })
            })
        }
    }
})();