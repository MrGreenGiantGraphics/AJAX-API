namespace MovieApp.Services {

    export class MovieService {

        private $http;
        private apiUrls;

        constructor($http, apiUrls) {
            this.$http = $http;
            this.apiUrls = apiUrls;
        }

        public list() {
            //                         /api/movies
            return this.$http.get(`${this.apiUrls.movies}`)
        }

        public mapToList(anonymousArray): MovieApp.Models.Movie[]{
            return anonymousArray.map(function (ele) {
                return MovieApp.Models.Movie.parse(ele);
            });
        }
    }

    angular.module('MovieApp').service('MovieService', MovieService);
}