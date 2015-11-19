var MovieApp;
(function (MovieApp) {
    var Controllers;
    (function (Controllers) {
        var MovieListController = (function () {
            function MovieListController($location, MovieService) {
                var _this = this;
                this.$location = $location;
                MovieService.list()
                    .then(function (response) {
                    _this.movies = MovieService.mapToList(response.data);
                });
            }
            MovieListController.prototype.goTo = function (id) {
                this.$location.path("/movie/" + id);
            };
            return MovieListController;
        })();
        Controllers.MovieListController = MovieListController;
    })(Controllers = MovieApp.Controllers || (MovieApp.Controllers = {}));
})(MovieApp || (MovieApp = {}));
