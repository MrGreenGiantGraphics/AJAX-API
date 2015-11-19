namespace MovieApp.Controllers {

    export class MovieListController {

        private $location;

        public movies: MovieApp.Models.Movie[];

        constructor($location, MovieService: MovieApp.Services.MovieService) {

            this.$location = $location;
            
            MovieService.list()
                .then((response) => {
                    this.movies = MovieService.mapToList(response.data);
                });
        }

        public goTo(id: number) {
            this.$location.path(`/movie/${id}`);
        }
    }
}