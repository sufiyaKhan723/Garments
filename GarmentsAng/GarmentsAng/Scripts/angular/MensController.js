//app = angular.module("myapp", []);


// the storeController contains two objects:
// - store: contains the product list
// - cart: the shopping cart object
//function MensController($scope, $routeParams, DataService) {

//    $scope.siteName = "5 Fold.com";
//}

//storeApp.controller('MensController', ['$scope',function($scope) {
//    $scope.siteName = "5 Fold.com";
//    $scope.message = "Mens Controller";
    
//}
//]);

function MensController($scope, $routeParams, DataService, category) {
    $scope.siteName = "5 Fold.com";
    $scope.message = "Mens Controller";
    $scope.categories = category.items;
    $scope.catId = 1;
    $scope.submenu = {};
    $scope.newItem = {};
    $scope.category = category  ;
    // use routing to pick the selected product
    if ($routeParams.catId != null) {
        $scope.categories = $scope.MenuObject.getCategory($routeParams.catId);
    }
    //$scope.submenu = category.submenu;
    //$scope.categories[0].menus;
    //DataService.catId = $scope.catId;
    //$scope.getCategory = function ($event) {
    //    alert("Hi"+catId);
    //    for (var i = 0; i < this.categories.length; i++) {
    //        if (this.categories[i].catId == catId)
    //            return this.submenu=this.categories[i].menus;
    //    }
    //};
   
}

//clothsstore.prototype.getCategory = function (catId) {
//    for (var i = 0; i < this.categories.length; i++) {
//        if (this.categories[i].catId == catId)
//            return this.submenu = this.categories[i].menus;
//    }
//};
