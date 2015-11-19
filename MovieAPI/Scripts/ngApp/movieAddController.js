var MovieApp;
(function (MovieApp) {
    var Controllers;
    (function (Controllers) {
        var MovieAddController = (function () {
            function MovieAddController($http) {
                this.$http = $http;
            }
            MovieAddController.prototype.addMovie = function () {
                var newMovie = new MovieApp.Models.Movie(this.title, this.releaseDate);
                this.$http.post('/api/movies', newMovie)
                    .then(function (response) {
                    console.log(response);
                });
            };
            return MovieAddController;
        })();
        Controllers.MovieAddController = MovieAddController;
    })(Controllers = MovieApp.Controllers || (MovieApp.Controllers = {}));
})(MovieApp || (MovieApp = {}));
