(function() {
    'use strict';

    angular
        .module('AngularContacts')
        .controller('ContactProfileController', ContactProfileController);

    ContactProfileController.$inject = ['ContactProvider', '$routeParams'];
    function ContactProfileController(ContactProvider, $routeParams) {
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
            console.log(vm.list);
        }
        function giveMeGifs() {
            vm.list = vm.user.favoriteList.giphy;
        }
        function giveMeComics() {
            vm.list = vm.user.favoriteList.marvel;
        }
    }
})();