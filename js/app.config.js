(function() {
    'use strict';

    angular.module('AngularContacts', ['ngRoute']).config(config)

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
                } )
        }

    })();