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
            giveMeGifts: giveMeGifts
        };

        return service;

        ////////////////
        function giveMeGifts(input, offset) {
            let limit = 8;
            let url = buildURL(input, limit, offset);
            console.log(url);
            return $http.get(url).then(res => {
                console.log(res.data);
                return res.data.data;
            })

         }
         function buildURL(input, limit, offset) {
            let arr = "q="+input+"&api_key="+key+"&limit=8&offset="+offset;
            return url+arr;
         }
    }
})();