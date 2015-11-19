namespace MovieApp.Controllers {

    export class MovieAddController {

        private $http;

        public title: string;
        public releaseDate: string;

        constructor($http) {
            this.$http = $http;
        }

        public addMovie(): void {
            let newMovie = new MovieApp.Models.Movie(this.title, this.releaseDate);

            this.$http.post('/api/movies', newMovie)
                .then((response) => {
                    console.log(response);
                });
        }
    }
}