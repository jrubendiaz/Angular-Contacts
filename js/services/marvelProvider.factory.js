(function() {
    'use strict';

    angular
        .module('AngularContacts')
        .factory('MarvelProvider', MarvelProvider);

    MarvelProvider.$inject = ['$http'];
    function MarvelProvider($http) {
        const private_key = "f79c3e8abd8b3ccc7ce21d302c9042b289a5c07a";
        const public_key = "c3c37af06a9034afc99987e14a07c80f";
        var base_url = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey="+public_key;
        var url = "";
        var service = {
            giveMeComics:giveMeComics
        };

        return service;

        ////////////////

        function buildURL(input, limit, offset) {
            url = base_url;
            let arr = "&titleStartsWith="+input+"&limit=8&offset="+offset;
            return url+arr;
         }

        function giveMeComics(input, offset) {
            let limit = 8;
            url = buildURL(input, limit, offset)

            return $http.get(url).then(res => {
                console.log(res);
                console.log(url);
                let comics = res.data.data.results;

                let aux_comics = [];
                let aux_comic = {};

                comics.forEach(comic => {
                    aux_comic = {
                        photo: comic.images[0].path+"."+comic.images[0].extension,
                        ...comic
                    }
                    aux_comics.push(aux_comic);
                })
                return aux_comics;
            })
         }


    }
})();