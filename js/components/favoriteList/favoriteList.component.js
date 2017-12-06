(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular
        .module('AngularContacts')
        .component('favoriteList', {
            templateUrl: '/js/components/favoriteList/favoriteList.html',
            controller: FavoriteListComponent,
            controllerAs: 'vm',
            bindings: {
                list: '=',
            },
        });

    FavoriteListComponent.$inject = [];
    function FavoriteListComponent() {
        var vm = this;
        vm.removeFromList = removeFromList;


        ////////////////

        vm.$onInit = function() {
         };
        vm.$onChanges = function(changesObj) {
         };
        vm.$onDestroy = function() { };

        function isIn(id) {
            let aux_list = vm.list.find(fav => {return fav.id==id}) || false;
            return aux_list != false;
        }

        function removeFromList(id) {
            console.log(id);
            if(isIn(id)) {
                let index = vm.list.findIndex(fav => {return fav.id == id});
                vm.list.splice(index, 1);
            }
        }

    }
})();