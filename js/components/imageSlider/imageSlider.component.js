(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular
        .module('AngularContacts')
        .component('imageSlider', {
            templateUrl: '/js/components/imageSlider/imageSlider.html',
            controller: ImageSliderController,
            controllerAs: 'vm',
            bindings: {
                list: '=',
                favoriteList: '=',
                offset: "=",
                limit: "<",
                giveMeNext: '&'
            },
        });

    ImageSliderController.$inject = [];
    function ImageSliderController() {
        var vm = this;

        //Functions
        vm.addToFavorite = addToFavorite;
        vm.isIn = isIn;
        vm.nextOffset = nextOffset;
        vm.prevOffset = prevOffset;
        ////////////////

        vm.$onInit = function() {
        };
        vm.$onChanges = function(changesObj) {
        };
        vm.$onDestroy = function() { };

        function isIn(id) {
            let aux_list = vm.favoriteList.find(fav => {return fav.id==id}) || false;
            return aux_list != false;
        }
        function addToFavorite(image) {
            !isIn(image.id) ? vm.favoriteList.push(image) : ""
        }
        function nextOffset() {
            vm.offset += vm.limit;
            vm.giveMeNext();
            console.log(vm.list);
        }
        function prevOffset() {
            vm.offset >= vm.limit ? vm.offset -= vm.limit : ""
            vm.giveMeNext();
        }
    }
})();