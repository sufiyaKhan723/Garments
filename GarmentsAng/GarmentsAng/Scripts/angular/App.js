'use strict';

// App Module: the name AngularStore matches the ng-app attribute in the main <html> tag
// the route provides parses the URL and injects the appropriate partial page
var storeApp = angular.module('AngularStore', ['ngRoute', 'angular-carousel']);
//.config(function config($stateProvider) {
//    $stateProvider.state("home", {
//        url: "",
//        controller: "CarouselController",
//        templateUrl: "partials/home.htm"
//    })
//    $stateProvider.state("store", {
//        url: "",
//        controller: "storeController",
//        templateUrl: "partials/store.htm"
//    })
//    $stateProvider.state("products/:productSku", {
//        url: "",
//        controller: "storeController",
//        templateUrl: "partials/product.htm"
//    })
//    $stateProvider.state("mens", {
//        url: "",
//        controller: "MensController",
//        templateUrl: "partials/product.htm"
//    })
//});
storeApp.directive("testdirective", function () {
    return {
        restrict: "E",
        template: "<div> Shop as required more options  </div>"

    }
})
  storeApp.config(['$routeProvider', function ($routeProvider) {
      $routeProvider.
          when('/home', {
              templateUrl: 'partials/home.htm',
              controller: storeController
          }).
          when('/store', {
              templateUrl: 'partials/store.htm',
              controller: storeController
          }).
          when('/products/:productSku', {
              templateUrl: 'partials/product.htm',
              controller: storeController
          }).
          when('/cart', {
              templateUrl: 'partials/shoppingCart.htm',
              controller: storeController
          }).
          when('/Category', {
              templateUrl: 'partials/Category.htm',
              controller: MensController
          }).
          when('/AddToCart', {
              templateUrl: 'partials/AddItem.htm',
              controller: CartForm
          }).
          otherwise({
              redirectTo: '/home'
          });
  }]);

  storeApp.factory('category', function () {
      var items = [];
      var submenu = [];
      var myCategoryService = {};

      myCategoryService.addItem = function (item) {
          items.push(item);
      };
      myCategoryService.removeItem = function (item) {
          var index = items.indexOf(item);
          items.splice(index, 1);
      };
      myCategoryService.items = function () {
          return items;
      };
      myCategoryService.submenu = function () {
          return submenu;
      };
      return myCategoryService;
  });

  function MyCtrl($scope, basket) {
      $scope.newItem = {};
      $scope.basket = basket;
  }

// create a data service that provides a store and a shopping cart that
// will be shared by all views (instead of creating fresh ones for each view).
storeApp.factory("DataService", function () {
    // Create Common Object
    var comObject = new CommonObject();
    var Myclothstores = new clothsstore();
    // create store
    var myStore = new store();
   
    // create shopping cart
    var myCart = new shoppingCart("AngularStore");
    var DataService = this;
    DataService.CatId = this.CatId;

    // enable PayPal checkout
    // note: the second parameter identifies the merchant; in order to use the 
    // shopping cart with PayPal, you have to create a merchant account with 
    // PayPal. You can do that here:
    // https://www.paypal.com/webapps/mpp/merchant
    myCart.addCheckoutParameters("PayPal", "bernardo.castilho-facilitator@gmail.com");

    // enable Google Wallet checkout
    // note: the second parameter identifies the merchant; in order to use the 
    // shopping cart with Google Wallet, you have to create a merchant account with 
    // Google. You can do that here:
    // https://developers.google.com/commerce/wallet/digital/training/getting-started/merchant-setup
    myCart.addCheckoutParameters("Google", "500640663394527",
        {
            ship_method_name_1: "UPS Next Day Air",
            ship_method_price_1: "20.00",
            ship_method_currency_1: "USD",
            ship_method_name_2: "UPS Ground",
            ship_method_price_2: "15.00",
            ship_method_currency_2: "USD"
        }
    );

    // return data object with store and cart
    return {
        store: myStore,
        cart: myCart,
        commonObj: comObject,
        clothstores: Myclothstores
        
    };
});