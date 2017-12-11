(function() {
    'use strict';

    angular
        .module('AngularContacts')
        .factory('firebaseProvider', firebaseProvider);

    firebaseProvider.$inject = ['$firebaseArray', '$firebaseObject', '$firebaseAuth'];
    function firebaseProvider($firebaseArray, $firebaseObject, $firebaseAuth) {
        var service = {
            getAll: getAll,
            newUser: newUser,
        };

        return service;

        ////////////////
        function getAll() {
            var ref = firebase.database().ref().child('contacts');
            // download the data into a local object
            return $firebaseArray(ref);
        }
        function newUser(email, password) {
            console.log(email);
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ...
              });
        }
    }
})();