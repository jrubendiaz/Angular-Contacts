(function() {
    'use strict';

    angular
        .module('AngularContacts')
        .controller('ContactsController', ContactsController);

    ContactsController.$inject = ['ContactProvider'];
    function ContactsController(ContactProvider) {
        var vm = this;

        // Own Variables
        vm.contacts = {};
        vm.edit = 'personal';

        // Own Functions
        vm.addContact = addContact;

        //Comics Variables
        vm.list_comics = [];
        vm.offset_comics = 0;
        vm.input_comics = "spider";
        vm.favorite_list_comics = [];
        //Comics Functions
        vm.giveMeComics = giveMeComics;
        vm.nextOffset_comics = nextOffset_comics;
        vm.prevOffset_comics = prevOffset_comics;
        vm.addToFavorite_comics = addToFavorite_comics;
        vm.isIn_comics = isIn_comics;
        vm.removeFromFavorite_comics = removeFromFavorite_comics;

        activate();

        ////////////////

        function activate() {
            vm.contacts = ContactProvider.getAll();
        }
        function addContact() {
            console.log(vm.name);
            let contact = {
                name : vm.name || "Nombre aleatorio",
                email : vm.email || "aleatorio@correo.es",
                photo : vm.photo || "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=750&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                id : Date.now()
            }
            ContactProvider.add(contact);
        }

        //Comics Functions
        function giveMeComics() {
            MarvelProvider.giveMeComics(vm.input, vm.offset).then(res => {
                vm.list = res;
            })
         }
         function nextOffset_comics() {
            vm.offset = vm.offset+8;
            giveMeComics();
         }
         function prevOffset_comics() {
             vm.offset = vm.offset-8;
             giveMeComics();
         }
         function addToFavorite_comics(comic) {
            !isIn(comic.id) ? vm.favorite_list.push(comic) : ""
            //vm.favorite_list.push(comic);
            giveMeComics();
         }
         function isIn_comics(id) {
            let aux_list = vm.favorite_list.find(comic => {return comic.id==id}) || false;
            return aux_list != false;
         }

        function removeFromFavorite_comics(id) {
            if(isIn(id)) {
                let index = vm.favorite_list.findIndex(comic => {return comic.id == id});
                vm.favorite_list.splice(index, 1);
            }
         }

    }
})();