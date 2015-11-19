var MovieApp;
(function (MovieApp) {
    var Services;
    (function (Services) {
        var MovieService = (function () {
            function MovieService($http, apiUrls) {
                this.$http = $http;
                this.apiUrls = apiUrls;
            }
            MovieService.prototype.list = function () {
                //                         /api/movies
                return this.$http.get("" + this.apiUrls.movies);
            };
            MovieService.prototype.mapToList = function (anonymousArray) {
                return anonymousArray.map(function (ele) {
                    return MovieApp.Models.Movie.parse(ele);
                });
            };
            return MovieService;
        })();
        Services.MovieService = MovieService;
        angular.module('MovieApp').service('MovieService', MovieService);
    })(Services = MovieApp.Services || (MovieApp.Services = {}));
})(MovieApp || (MovieApp = {}));
