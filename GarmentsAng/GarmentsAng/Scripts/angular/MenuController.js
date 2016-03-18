//app = angular.module("myapp", []);
storeApp.controller("MainController", function ($scope, $http, DataService, category) {
    $scope.siteName = "5 Fold.com";
    
    $scope.menus = [
   {
       title: "Mens",
       catId:1,
       action: "#/Category",
       menus: [
         {
             title: "T-Shirts",
             action: "#/Category/",
             subCatId:1
         },
         {
             title: "Shirts",
             action: "moreStuff",
             subCatId:2,
             menus: [
               {
                   title: "Submenu 1b 1",
                   action: "stuff"
               },
               {
                   title: "Submenu 1b 2",
                   action: "moreStuff"
               }
             ]
         },
         {
             title: "Pants",
             action: "index.html",
             subCatId:3
         },
         {
             title: "Jackets",
             action: "index.html",
             subCatId: 4
         },
         {
             title: "Sweaters",
             action: "index.html",
             subCatId: 5
         },
         {
             title: "Innerwears",
             action: "index.html",
             subCatId: 6
         }

       ]
   },
   {
       title: "Women",
       catId: 2,
       action: "#/Category",
       menus: [
         {
             title: "T-Shirts",
             action: "awesomeStuff",
             subCatId:1
         },
         {
             title: "Tops ",
             action: "moreAwesomeStuff",
             subCatId: 1
         },
         {
             title: "Bottoms",
             action: "moreAwesomeStuff"
         },
         {
             title: "Sweaters",
             action: "moreAwesomeStuff"
         }
       ]
   },
   {
       title: "Kids",
       catId: 3,
       action: "#/Category",
       menus: [
         {
             title: "Girls",
             action: "awesomeStuff"
         },
         {
             title: "Boyes",
             action: "moreAwesomeStuff"
         }
       ]
   },
   {
       title: "Winterwear",
       catId: 4,
       action: "#/Category",
       menus: [
         {
             title: "Mens",
             action: "awesomeStuff"
         },
         {
             title: "Womens",
             action: "moreAwesomeStuff"
         },
         {
             title: "Kids",
             action: "moreAwesomeStuff"
         }
       ]
   },
   {
       title: "Summerwear",
       catId: 5,
       action: "#/Category",
       menus: [
         {
             title: "Mens",
             action: "awesomeStuff"
         },
         {
             title: "Womens",
             action: "moreAwesomeStuff"
         },
         {
             title: "Kids",
             action: "moreAwesomeStuff"
         }
       ]
   },
   {
       title: "Cotton",
       catId: 6,
       action: "#/Category",
       menus: [
         {
             title: "Mens",
             action: "awesomeStuff"
         },
         {
             title: "Womens",
             action: "moreAwesomeStuff"
         },
         {
             title: "Kids",
             action: "moreAwesomeStuff"
         }
       ]
   }


    ];
    //$scope.categories.push($scope.menus);
    DataService.commonObj.categories = $scope.menus;
    category.items = $scope.menus;
    $scope.getCategory = function ($index) {
        alert($index);
        category.submenu = category.items[$index].menus;
        //for (var i = 0; i < category.items.length; i++) {
        //    if (this.categories[i].catId == catId)
        //        return this.submenu = this.categories[i].menus;
        //}
    };
});

$(document).ready(function () { });