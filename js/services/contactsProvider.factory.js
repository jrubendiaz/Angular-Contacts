(function() {
    'use strict';

    angular
        .module('AngularContacts')
        .factory('ContactProvider', ContactProvider);

    ContactProvider.$inject = ['$http'];
    function ContactProvider($http) {
        var service = {
            getAll: getAll,
            add: add
        };

        return service;

        ////////////////
        function getAll() {
            if(localStorage.contacts) {
                return JSON.parse(localStorage.contacts);
            }else {return localStorage.contacts = JSON.stringify([])}
         }

         function add(contact) {
             let contacts = getAll();
             contacts.push(contact);
             localStorage.contacts = JSON.stringify(contacts);
         }
    }
})();