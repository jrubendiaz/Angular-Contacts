(function() {
    'use strict';

    angular
        .module('AngularContacts')
        .factory('GiphyProvider', GiphyProvider);

    GiphyProvider.$inject = ['$http'];
    function GiphyProvider($http) {
        const key = "Hx6uXJnG4UBlYRiAF1v0TtjwbUnF583L";
        var url = "http://api.giphy.com/v1/gifs/search?";
        var service = {
            giveMeGifs: giveMeGifs
        };

        return service;

        ////////////////
        function giveMeGifs(input, offset) {
            let limit = 8;
            let url = buildURL(input, limit, offset);
            let aux_gif = {};
            let aux_list = [];
            return $http.get(url).then(res => {
                res.data.data.forEach(gif => {
                    aux_gif = {
                        photo: gif.images.fixed_width.url,
                        ...gif
                    }
                    aux_list.push(aux_gif);
                })
                return aux_list;
            })

         }
         function buildURL(input, limit, offset) {
            let arr = "q="+input+"&api_key="+key+"&limit=8&offset="+offset;
            return url+arr;
         }
    }
})();