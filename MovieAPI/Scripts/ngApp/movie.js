var MovieApp;
(function (MovieApp) {
    var Models;
    (function (Models) {
        var Movie = (function () {
            function Movie(id, title, releaseDate) {
                this.id = id;
                this.title = title;
                this.releaseDate = new Date(releaseDate);
            }
            Movie.parse = function (obj) {
                return new Movie(obj.id, obj.title, obj.releaseDate);
            };
            return Movie;
        })();
        Models.Movie = Movie;
    })(Models = MovieApp.Models || (MovieApp.Models = {}));
})(MovieApp || (MovieApp = {}));
