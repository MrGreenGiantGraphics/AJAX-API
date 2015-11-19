namespace MovieApp.Controllers {

    export class MovieDetailsController {

        public movie: MovieApp.Models.Movie;

        constructor($http, $routeParams) {
            
            $http.get(`/api/movies/${$routeParams.id}`)
                .then((response) => {

                    this.movie = MovieApp.Models.Movie.parse(response.data);
                });
        }
    }
}