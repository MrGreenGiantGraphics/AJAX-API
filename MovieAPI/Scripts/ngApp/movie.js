var MovieApp;
(function (MovieApp) {
    var Models;
    (function (Models) {
        var Movie = (function () {
            function Movie(title, releaseDate, id, producers, directors, actors) {
                this.id = id;
                this.title = title;
                this.releaseDate = new Date(releaseDate);
                this.producers = producers;
                this.directors = directors;
                this.actors = actors;
            }
            Movie.parse = function (obj) {
                var producers = obj.producers.map(function (person) {
                    return Models.Person.parse(person);
                });
                var directors = obj.directors.map(function (person) {
                    return Models.Person.parse(person);
                });
                var actors = obj.actors.map(function (person) {
                    return Models.Person.parse(person);
                });
                return new Movie(obj.title, obj.releaseDate, obj.id, producers, directors, actors);
            };
            return Movie;
        })();
        Models.Movie = Movie;
    })(Models = MovieApp.Models || (MovieApp.Models = {}));
})(MovieApp || (MovieApp = {}));
