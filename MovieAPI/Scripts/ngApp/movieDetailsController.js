var MovieApp;
(function (MovieApp) {
    var Controllers;
    (function (Controllers) {
        var MovieDetailsController = (function () {
            function MovieDetailsController($http, $routeParams) {
                var _this = this;
                $http.get("/api/movies/" + $routeParams.id)
                    .then(function (response) {
                    _this.movie = MovieApp.Models.Movie.parse(response.data);
                });
            }
            return MovieDetailsController;
        })();
        Controllers.MovieDetailsController = MovieDetailsController;
    })(Controllers = MovieApp.Controllers || (MovieApp.Controllers = {}));
})(MovieApp || (MovieApp = {}));
