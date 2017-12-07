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

        /*
            === What parseData DO ===
            PARSE data like "2017-03-22 12:41:55" to timestap like "1251452562"
            "2017-03-22 12:41:55" -> 1540520000
        */
        function parseData(dataToParse) {
            let dateString = dataToParse;
            let dateTimeParts = dateString.split(' ');
            let timeParts = dateTimeParts[1].split(':');
            let dateParts = dateTimeParts[0].split('-');
            let date = new Date(dateParts[0], parseInt(dateParts[1], 10) - 1, dateParts[2], timeParts[0], timeParts[1]);
            return date.getTime();
        }

        function giveMeGifs(input, offset) {
            let limit = 9;
            let url = buildURL(input, limit, offset);
            let aux_gif = {};
            let aux_list = [];
            var trendingTimestap = 0;
            var createTimestap = 0;

            return $http.get(url).then(res => {
                res.data.data.forEach(gif => {
                    let date = gif.trending_datetime.split("-");
                    if(date[0] != 0) {
                        trendingTimestap = parseData(gif.trending_datetime);
                        createTimestap = parseData(gif.import_datetime);
                    }
                    aux_gif = {
                        photo: gif.images.fixed_width.url,
                        trendingTimestap: trendingTimestap,
                        createTimestap: createTimestap,
                        ...gif
                    }
                    aux_list.push(aux_gif);
                })
                return aux_list;
            })
         }

         function buildURL(input, limit, offset) {
            let arr = "q="+input+"&api_key="+key+"&limit="+limit+"&offset="+offset;
            return url+arr;
         }
    }
})();