angular.module("miniRouting", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: './js/home/home-tmpl.html',
      controller: homeCtrl
    })
    .state("products", {
      url: "/products/:id",
      templateUrl: './js/products/products-tmpl.html',
      controller: productsCtrl
    })
    .state("settings", {
      url: "/settings",
      templateUrl: './js/settings/settings-tmpl.html',
      controller: settingsCtrl
    });
});
