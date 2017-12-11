(function() {
    'use strict';

    angular
        .module('AngularContacts')
        .controller('ContactProfileController', ContactProfileController);

    ContactProfileController.$inject = ['ContactProvider', '$routeParams', '$firebaseObject'];
    function ContactProfileController(ContactProvider, $routeParams, $firebaseObject) {
        var vm = this;

        //Variables
        vm.list = [];
        vm.user = {};

        //Functions
        vm.giveMeGifs = giveMeGifs;
        vm.giveMeComics = giveMeComics;

        activate();

        ////////////////

        function activate() {
            var id = $routeParams.id;
            vm.user = ContactProvider.get(id);
            giveMeGifs();
        }
        function giveMeGifs() {
            vm.list = vm.user.favoriteList.giphy;
        }
        function giveMeComics() {
            vm.list = vm.user.favoriteList.marvel;
        }
    }
})();