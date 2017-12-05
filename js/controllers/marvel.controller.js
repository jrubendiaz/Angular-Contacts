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
        vm.input = "spider";
        vm.favorite_list = [];

        //Functions
        vm.giveMeComics = giveMeComics;
        vm.nextOffset = nextOffset;
        vm.prevOffset = prevOffset;
        vm.addToFavorite = addToFavorite;
        vm.isIn = isIn;

        activate();

        ////////////////

        function activate() {
            giveMeComics();
         }
         function giveMeComics() {
            MarvelProvider.giveMeComics(vm.input, vm.offset).then(res => {
                vm.list = res;
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
         function addToFavorite(comic) {
            vm.favorite_list.push(comic);
            giveMeComics();
         }
         function isIn(id) {
            let aux_list = vm.favorite_list.find(comic => {return comic.id==id}) || false;
            return aux_list != false;
         }
    }
})();