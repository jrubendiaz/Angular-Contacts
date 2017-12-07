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
        vm.limit = 9;
        vm.timeoutID = "";

        //Functions
        vm.giveMeGifs = giveMeGifs;
        vm.inputHandler = inputHandler;
        vm.orderByTrending = orderByTrending;
        vm.orderByNewest = orderByNewest;

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
        // Order by trending data. The gif that was trending in the last days will be the first.
        function orderByTrending() {
            vm.list = vm.list.sort((item_a, item_b) => {
                if(item_a.trendingTimestap > item_b.trendingTimestap) {
                    return 1;
                }
                if(item_a.trendingTimestap < item_b.trendingTimestap) {
                    return -1;
                }
                return 0;
            })
        }
        // Order by import data. The gif that was added/imported in the last days will be the first.
        function orderByNewest() {
            vm.list = vm.list.sort((item_a, item_b) => {
                if(item_a.createTimestap > item_b.createTimestap) {
                    return 1;
                }
                if(item_a.createTimestap < item_b.createTimestap) {
                    return -1;
                }
                return 0;
            })
        }
    }
})();