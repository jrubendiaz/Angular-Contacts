(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular
        .module('AngularContacts')
        .component('marvelManager', {
            templateUrl: '/js/components/marvelManager/marvelManager.html',
            controller: MarvelManagerController,
            controllerAs: 'vm',
            bindings: {
                favoriteList: '=',
            },
        });

    MarvelManagerController.$inject = ['MarvelProvider'];
    function MarvelManagerController(MarvelProvider) {
        var vm = this;

        //Variables
        vm.list = [];
        vm.offset = 0;
        vm.input = "";
        vm.limit = 3;
        vm.timeoutID = "";

        //Functions
        vm.giveMeComics = giveMeComics;
        vm.inputHandler = inputHandler;

        ////////////////

        vm.$onInit = function() {};
        vm.$onChanges = function(changesObj) { };
        vm.$onDestroy = function() { };

        function inputHandler() {
            if(vm.input.length > 2) {
                window.clearTimeout(vm.timeoutID);
                vm.timeoutID = window.setTimeout(giveMeComics, 1500);
            }
        }

        function giveMeComics() {
            console.log("Soy giveMeComics");
            MarvelProvider.giveMeComics(vm.input, vm.offset)
                            .then(comics => {
                                console.log(comics);
                                vm.list = comics;
                            })
        }
    }
})();