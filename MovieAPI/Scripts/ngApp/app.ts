namespace MovieApp {
    angular.module('MovieApp', ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: '/ngViews/home.html',
                    controller: MovieApp.Controllers.MovieListController,
                    controllerAs: 'mlc'
                })
                .when('/movie/:title', {
                    templateUrl: '/ngViews/details.html',
                    controller: MovieApp.Controllers.MovieDetailsController,
                    controllerAs: 'mdc'
                });
        });
}