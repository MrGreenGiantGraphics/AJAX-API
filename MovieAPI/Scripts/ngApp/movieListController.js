var MovieApp;
(function (MovieApp) {
    var Controllers;
    (function (Controllers) {
        var MovieListController = (function () {
            function MovieListController($http, $location) {
                var _this = this;
                this.$location = $location;
                $http.get('/api/movies')
                    .then(function (response) {
                    _this.movies = response.data.map(function (ele) {
                        return MovieApp.Models.Movie.parse(ele);
                    });
                });
            }
            MovieListController.prototype.goTo = function (movieTitle) {
                this.$location.path("/movie/" + movieTitle);
            };
            return MovieListController;
        })();
        Controllers.MovieListController = MovieListController;
    })(Controllers = MovieApp.Controllers || (MovieApp.Controllers = {}));
})(MovieApp || (MovieApp = {}));
