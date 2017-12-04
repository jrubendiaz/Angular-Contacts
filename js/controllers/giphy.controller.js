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

        //Functions
        vm.giveMeGifts = giveMeGifts;
        vm.nextOffset = nextOffset;
        vm.prevOffset = prevOffset;

        activate();

        ////////////////

        function activate() {

         }
         function giveMeGifts() {
            GiphyProvider.giveMeGifts(vm.input, vm.offset).then(res => {
                vm.list = res;
                console.log(vm.list);
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
    }
})();