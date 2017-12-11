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
        vm.placeholders = [];
        vm.randomChars = [];

        //Functions
        vm.giveMeComics = giveMeComics;
        vm.inputHandler = inputHandler;
        vm.buildPlaceholders = buildPlaceholders;
        vm.giveMeComics_byChar = giveMeComics_byChar;

        ////////////////

        vm.$onInit = function() {
            buildPlaceholders();
            buildRandomCharacters();
        };
        vm.$onChanges = function(changesObj) { };
        vm.$onDestroy = function() { };

        function inputHandler() {
            if(vm.input.length > 2) {
                window.clearTimeout(vm.timeoutID);
                vm.timeoutID = window.setTimeout(giveMeComics, 1500);
            }
        }
        function buildPlaceholders() {
            for(var i = 0; i < vm.limit; i++) {
                vm.placeholders.push("a");
            }
        }
        function buildRandomCharacters() {
            vm.randomChars = [];
            for(var i = 0; i < 5; i++) {
                MarvelProvider.giveMeRandomCharacter().then(char => {
                    vm.randomChars.push(char);
                })
            }
        }
        function giveMeComics() {
            MarvelProvider.giveMeComics(vm.input, vm.offset)
                            .then(comics => {
                                vm.list = comics;
                            })
        }
        function giveMeComics_byChar(char) {
            vm.list = [];
            MarvelProvider.giveMeComics_byChar(char, vm.offset)
                            .then(comics => {
                                vm.list = comics;
                            })
        }
    }
})();