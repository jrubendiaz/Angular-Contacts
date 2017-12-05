(function() {
    'use strict';

    angular
        .module('AngularContacts')
        .controller('MarvelController', MarvelController);

    MarvelController.$inject = ['MarvelProvider'];
    function MarvelController(MarvelProvider) {
        var vm = this;

        //Variables
        vm.offset = 0;
        vm.limit = 8;
        vm.input = "spider";

        //Functions
        vm.giveMeComics = giveMeComics;
        vm.nextOffset = nextOffset;
        vm.prevOffset = prevOffset;

        activate();

        ////////////////

        function activate() {
            giveMeComics();
         }
         function giveMeComics() {
             console.log(vm.input, vm.offset);
            MarvelProvider.giveMeComics(vm.input, vm.offset).then(res => {
                vm.list = res;
                console.log(vm.list);
            })
         }
         function nextOffset() {
            vm.offset = vm.offset+8;
            giveMeComics();
         }
         function prevOffset() {
             vm.offset = vm.offset-8;
             giveMeComics();
         }
    }
})();