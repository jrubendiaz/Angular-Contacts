(function() {
    'use strict';

    angular
        .module('AngularContacts')
        .controller('GiphyController', GiphyController);

        GiphyController.$inject = ['GiphyProvider'];
    function GiphyController(GiphyProvider) {
        var vm = this;

        //Variables
        vm.list = [];
        vm.input = "cat";
        vm.offset = 0;
        vm.favorite_list = [];
        vm.limit = 8;

        //Functions
        vm.giveMeGifts = giveMeGifts;
        vm.nextOffset = nextOffset;
        vm.prevOffset = prevOffset;
        vm.addToFavorite = addToFavorite;
        vm.isIn = isIn;
        vm.removeFromFavorite = removeFromFavorite;

        activate();

        ////////////////

        function activate() {
            giveMeGifts();
         }
         function giveMeGifts() {
            GiphyProvider.giveMeGifts(vm.input, vm.offset).then(res => {
                vm.list = res;
            })
         }
         function nextOffset() {
            vm.offset = vm.offset+8;
            giveMeGifts();
         }
         function prevOffset() {
             vm.offset = vm.offset-8;
             giveMeGifts();
         }
         function addToFavorite(gif) {
            !isIn(gif.id) ? vm.favorite_list.push(gif) : ""
            giveMeGifts();
         }
         function isIn(id) {
            let aux_list = vm.favorite_list.find(gif => {return gif.id==id}) || false;
            return aux_list != false;
         }

        function removeFromFavorite(id) {
            if(isIn(id)) {
                let index = vm.favorite_list.findIndex(gif => {return gif.id == id});
                vm.favorite_list.splice(index, 1);
            }
         }
    }
})();