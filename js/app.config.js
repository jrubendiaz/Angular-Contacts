(function() {
    'use strict';

    angular.module('AngularContacts', ['ngRoute', 'firebase']).config(config)

    config.$inject = ['$routeProvider', '$locationProvider'];

        function config($routeProvider, $locationProvider) {
            $routeProvider
                .when("/", {
                    controller: 'ContactsController',
                    templateUrl: 'js/views/contactsList.html',
                    controllerAs: 'contactsCtrl'
                })
                .when("/giphy", {
                    controller: 'GiphyController',
                    templateUrl: 'js/views/giphyList.html',
                    controllerAs: 'giphyCtrl'
                })
                .when("/marvel", {
                    controller: 'MarvelController',
                    templateUrl: 'js/views/marvelList.html',
                    controllerAs: 'marvelCtrl'
                })
                .when("/contact/:id", {
                    controller: 'ContactProfileController',
                    templateUrl: 'js/views/contactProfile.html',
                    controllerAs: 'contactProfileCtrl'
                })
        }

    })();