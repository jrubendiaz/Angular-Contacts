(function() {
    'use strict';

    angular
        .module('AngularContacts')
        .factory('MarvelProvider', MarvelProvider);

    MarvelProvider.$inject = ['$http'];
    function MarvelProvider($http) {
        const private_key = "f79c3e8abd8b3ccc7ce21d302c9042b289a5c07a";
        const public_key = "c3c37af06a9034afc99987e14a07c80f";
        const base_url = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey="+public_key;
        const base_url_char = "https://gateway.marvel.com:443/v1/public/characters/";
        var url = "";
        var service = {
            giveMeComics: giveMeComics,
            giveMeRandomCharacter: giveMeRandomCharacter,
            giveMeComics_byChar: giveMeComics_byChar,
        };

        return service;

        ////////////////

        function buildURL(input, limit, offset) {
            url = base_url;
            let arr = "&titleStartsWith="+input+"&limit="+limit+"&offset="+offset;
            return url+arr;
         }
        function buildURL_char() {
            let randomID = Math.floor(Math.random() * (1010799 - 1010701)) + 1010701;
            return base_url_char+randomID+"?apikey=" + public_key;
        }
        function giveMeRandomCharacter() {
            url = buildURL_char();

            return $http.get(url).then(res => {
                let aux_char = res.data.data.results[0];
                let aux_comics = [];
                let aux_comic = {};
                let char = {
                    name: aux_char.name,
                    id: aux_char.id,
                    comics: aux_comics
                }
                return char;
            })
        }

        function giveMeComics(input, offset) {
            let limit = 3;
            url = buildURL(input, limit, offset)

            return $http.get(url).then(res => {
                let comics = res.data.data.results;

                let aux_comics = [];
                let aux_comic = {};

                comics.forEach(comic => {
                    let aux_title = comic.title.split(" ");
                    aux_comic = {
                        photo: comic.images[0].path+"."+comic.images[0].extension,
                        displayTitle: aux_title[0],
                        ...comic
                    }
                    aux_comics.push(aux_comic);
                })
                return aux_comics;
            })
         }
         function giveMeComics_byChar(char, offset) {
            url = "https://gateway.marvel.com:443/v1/public/comics?characters=" + char + "&limit=3&apikey=" + public_key;

            return $http.get(url).then(res => {
                let comics = res.data.data.results;
                let aux_comics = [];
                let aux_comic = {};

                comics.forEach(comic => {
                    let aux_title = comic.title.split(" ");
                    aux_comic = {
                        photo: comic.images[0].path+"."+comic.images[0].extension,
                        displayTitle: aux_title[0],
                        ...comic
                    }
                    aux_comics.push(aux_comic);
                })
                return aux_comics;
            })
         }


    }
})();