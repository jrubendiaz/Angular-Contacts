(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular
        .module('AngularContacts')
        .component('giphyManager', {
            templateUrl: '/js/components/giphyManager/giphyManager.html',
            controller: GiphyManagerController,
            controllerAs: 'vm',
            bindings: {
                favoriteList: '=',
            },
        });

    GiphyManagerController.$inject = ['GiphyProvider'];
    function GiphyManagerController(GiphyProvider) {
        var vm = this;

        //Variables
        vm.list = [];
        vm.offset = 0;
        vm.input = "";
        vm.limit = 3;
        vm.timeoutID = "";

        //Functions
        vm.giveMeGifs = giveMeGifs;
        vm.inputHandler = inputHandler;


        ////////////////

        vm.$onInit = function() { };
        vm.$onChanges = function(changesObj) { };
        vm.$onDestroy = function() { };

        function inputHandler() {
            if(vm.input.length > 2) {
                window.clearTimeout(vm.timeoutID);
                vm.timeoutID = window.setTimeout(giveMeGifs, 1500);
            }
        }

        function giveMeGifs() {
            GiphyProvider.giveMeGifs(vm.input, vm.offset)
                            .then(gifs => {
                                vm.list = gifs;
                            })
        }
    }
})();