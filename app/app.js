var app = angular.module('howler', [
        'ngSanitize',
        'ui.router',
        'spotify'
    ]
);
app.config(function($stateProvider, $urlRouterProvider, SpotifyProvider) {


    SpotifyProvider.setClientId('36571fc4ebc84c768debc6f589565317');
    SpotifyProvider.setRedirectUri('http://localhost:8000');
    SpotifyProvider.setScope('user-read-private playlist-read-private playlist-modify-private playlist-modify-public');
    // // If you already have an auth token
    // SpotifyProvider.setAuthToken('<AUTH_TOKEN>');


    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('root', {
            views: {
                'header': {
                    templateUrl: 'templates/header.html',
                    controller: 'headerController'
                },
                'sidebar': {
                    templateUrl: 'templates/sidebar.html',
                    controller: 'sidebarController'
                }
            }
        })
        .state('root.home', {
            url: '/home',
            views: {
                'content@': {
                    templateUrl: 'templates/home.html',
                    controller: 'homeController'
                }
            }
        });
});