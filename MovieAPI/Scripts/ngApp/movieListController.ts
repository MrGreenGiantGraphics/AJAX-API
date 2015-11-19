namespace MovieApp.Controllers {

    export class MovieListController {

        private $location;

        public movies: MovieApp.Models.Movie[];

        constructor($http, $location) {

            this.$location = $location;

            $http.get('/api/movies')
                .then((response) => {

                    this.movies = response.data.map(function (ele) {
                        return MovieApp.Models.Movie.parse(ele);
                    });
                });
        }

        public goTo(movieTitle: string) {
            this.$location.path(`/movie/${movieTitle}`);
        }
    }
}