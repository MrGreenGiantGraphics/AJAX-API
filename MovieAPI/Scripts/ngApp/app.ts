namespace MovieApp {
    angular.module('MovieApp', ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: '/ngViews/home.html',
                    controller: MovieApp.Controllers.MovieListController,
                    controllerAs: 'mlc'
                })
                .when('/movie/create', {
                    templateUrl: '/ngViews/add.html',
                    controller: MovieApp.Controllers.MovieAddController,
                    controllerAs: 'mac'
                })
                .when('/movie/:id', {
                    templateUrl: '/ngViews/details.html',
                    controller: MovieApp.Controllers.MovieDetailsController,
                    controllerAs: 'mdc'
                })
                
        });

    angular.module('MovieApp')
        .constant('apiUrls', {
            movies: '/api/movies',
            actors: '/api/actors'
        });
}