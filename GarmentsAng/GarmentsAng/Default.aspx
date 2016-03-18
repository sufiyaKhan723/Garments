<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="GarmentsAng.Default" %>

<!DOCTYPE html>

<html ng-app="AngularStore">
  <head>
    <title>Shopping Cart with AngularJS</title>

    <!-- jQuery, Angular -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript" ></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js" type="text/javascript"></script>
      <script src="Scripts/angular.min.js" type="text/javascript"></script>
      <script src="Scripts/jquery-2.1.4.min.js" type="text/javascript"></script>
    <!-- Bootstrap -->
      <link href="microsoft.files/style.css" rel="stylesheet" />
      <script src="microsoft.files/dmenu.js"></script>
      <link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
      <script src="Scripts/bootstrap.min.js" type="text/javascript"></script>

    <!-- AngularStore app -->
    <script src="Scripts/angular/product.js" type="text/javascript"></script>
    <script src="Scripts/angular/store.js" type="text/javascript"></script>
    <script src="Scripts/angular/shoppingCart.js" type="text/javascript"></script>
      <script src="Scripts/angular/App.js" type="text/javascript"></script>
    <script src="Scripts/angular/controller.js" type="text/javascript"></script>
    <link href="css/style.css" rel="stylesheet" type="text/css"/>
      <script src="Scripts/angular/angular-carousel.min.js"></script>
      <link href='css/angular-carousel.css' rel='stylesheet' type='text/css'>
        <link href='css/demo.css' rel='stylesheet' type='text/css'>
      <script src="Scripts/angular/CarouselController.js" type="text/javascript"></script>
      <script src="Scripts/angular-touch.js"></script>
      <script src="Scripts/angular/shifty.js"></script>
      <script src="Scripts/angular-route.min.js"></script>
      <script src="Scripts/angular/MenuController.js"></script>
      <script src="Scripts/angular/MensController.js"></script>
      <!-----
          SideMenu
          -->
      <script src="Scripts/angular/sideMenuController.js"></script>
      <script src="Scripts/angular/common.js"></script>
      <script src="Scripts/angular/ClothesStore.js"></script>
      <script src="Scripts/angular/category.js"></script>
      <script src="Scripts/angular/ClothesStore.js"></script>
      <script src="Scripts/angular/CartItems.js"></script>
  </head>

  <body >

      <form id="form1" runat="server">

    <!-- 
        bootstrap fluid layout
        (12 columns: span 10, offset 1 centers the content and adds a margin on each side)
    -->
      <div class="container" >
  
  <div ng-controller="MainController">
      <h3><b>{{siteName}}</b></h3>

    <div class="nav-tabs ">
      <ul id="microsoft" class="nav navbar-nav">
          
        <li ng-class="{'dropdown': menu.menus}" ng-repeat="menu in menus">
            
          <a href="{{menu.action}}" data-toggle="dropdown" ng-class="{'dropdown-toggle': menu.menus}" ng-click="getCategory($index)" >{{menu.title}} <span class="caret"></span></a>
          <ul class="dropdown-menu" ng-if="menu.menus" >
            <li ng-repeat="submenu in menu.menus">

              <a href="{{submenu.action}}"  >{{submenu.title}} </a>
            </li>
             <div class ="col-lg-offset-1 " ng-if="menu.menus"><img src="img/logo.png" /></div> 
          </ul>
            
        </li>
          
      </ul>

        <div > 
            <a href ="#A/ddToCart">Cart</a>
            
        </div>
        


    </div>
  </div>

</div>
      
      <div class="container">
        <div class="row">
            <div class="span10 offset1">
                <%--<h1 class="well" >
                    <a href="default.htm">
                        <img src="img/logo.png" height="60" width="60" alt="logo"/>
                    </a>
                    IVM Data 
                </h1>--%>
                <%--<div ng-controller="CarouselController" class ="col-lg-offset-1 " >
                <div class="carousel-demo">
                    <ul rn-carousel rn-carousel-index="carouselIndex2" rn-carousel-auto-slide rn-carousel-pause-on-hover rn-carousel-buffered class="carousel2">
                        <li ng-repeat="slide in slides2 track by slide.id" ng-class="'id-' + slide.id">
                            <div ng-style="{'background-image': 'url(' + slide.img + ')'}"  class="bgimage">
                              #{{ slide.id }}
                            </div>
                        </li>
                    </ul>
                    <div rn-carousel-indicators ng-if="slides2.length > 1" slides="slides2" rn-carousel-index="carouselIndex2"></div>
                </div>
            </div>--%>
                <%--<div ng-view></div>--%>
            </div>
        </div>
          
    </div>
      <div class="container">
          <div ng-view></div>
      </div>
      
    

      </form>
      
    

  </body>
</html>