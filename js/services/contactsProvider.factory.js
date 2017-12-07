(function() {
    'use strict';

    angular
        .module('AngularContacts')
        .factory('ContactProvider', ContactProvider);

    ContactProvider.$inject = ['$http'];
    function ContactProvider($http) {
        var service = {
            getAll: getAll,
            get: get,
            add: add
        };

        return service;

        ////////////////
        function getAll() {
            if(localStorage.contacts) {
                return JSON.parse(localStorage.contacts);
            }else {return localStorage.contacts = JSON.stringify([])}
         }
         function get(id) {
             let contacts = getAll();
             let res = contacts.find(user => {
                 return user.id == id
             }) || {};
             return res;
         }
         function add(contact) {
             let contacts = getAll();
             let id = new Date().getTime();
             contact.id = id;
             contacts.push(contact);
             localStorage.contacts = JSON.stringify(contacts);
         }
    }
})();