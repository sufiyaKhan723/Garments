﻿
storeApp.controller('CarouselController', function CarouselController($scope) {

    $scope.colors = ["#fc0003", "#f70008", "#f2000d", "#ed0012", "#e80017", "#e3001c", "#de0021", "#d90026", "#d4002b", "#cf0030", "#c90036", "#c4003b", "#bf0040", "#ba0045", "#b5004a", "#b0004f", "#ab0054", "#a60059", "#a1005e", "#9c0063", "#960069", "#91006e", "#8c0073", "#870078", "#82007d", "#7d0082", "#780087", "#73008c", "#6e0091", "#690096", "#63009c", "#5e00a1", "#5900a6", "#5400ab", "#4f00b0", "#4a00b5", "#4500ba", "#4000bf", "#3b00c4", "#3600c9", "#3000cf", "#2b00d4", "#2600d9", "#2100de", "#1c00e3", "#1700e8", "#1200ed", "#0d00f2", "#0800f7", "#0300fc"];

    function getSlide(target, style) {
        var i = target.length;
        return {
            id: (i + 1),
            label: 'slide #' + (i + 1),
            //img: 'http://lorempixel.com/450/300/' + style + '/' + ((i + 1) % 10),
            img: 'http://localhost:51213/Images/Slider/' + style + '/' + ((i + 1) % 10)+'.jpg',
            color: $scope.colors[ (i*10) % $scope.colors.length],
            odd: (i % 2 === 0)
        };
    }

    function addSlide(target, style) {
        target.push(getSlide(target, style));
    };

    $scope.carouselIndex = 3;
    $scope.carouselIndex2 = 0;
    $scope.carouselIndex2 = 1;
    $scope.carouselIndex3 = 5;
    $scope.carouselIndex4 = 5;

    function addSlides(target, style, qty) {
        for (var i=0; i < qty; i++) {
            addSlide(target, style);
        }
    }

    // 1st ngRepeat demo
    $scope.slides = [];
    addSlides($scope.slides, 'sports', 50);

    // 2nd ngRepeat demo
    //$scope.slides2 = [];
    //addSlides($scope.slides2, 'sports', 10);

    $scope.slides2 = [];
    addSlides($scope.slides2, 'garments', 10);
/*
    // 3rd ngRepeat demo
    $scope.slides3 = [];
    addSlides($scope.slides3, 'people', 50);

    // 4th ngRepeat demo
    $scope.slides4 = [];
    addSlides($scope.slides4, 'city', 50);


    // 5th ngRepeat demo
    $scope.slides6 = [];
    $scope.carouselIndex6 = 0;
    addSlides($scope.slides6, 'sports', 10);
    $scope.addSlide = function(at) {
        if(at==='head') {
            $scope.slides6.unshift(getSlide($scope.slides6, 'people'));
        } else {
            $scope.slides6.push(getSlide($scope.slides6, 'people'));
        }
    }
    */
            
    // End to End swiping
    // load 130 images in main javascript container
    var slideImages = [];
    addSlides(slideImages, 'sports', 10);
    addSlides(slideImages, 'people', 10);
    addSlides(slideImages, 'city', 10);
    addSlides(slideImages, 'abstract', 10);
    addSlides(slideImages, 'nature', 10);
    addSlides(slideImages, 'food', 10);
    addSlides(slideImages, 'transport', 10);
    addSlides(slideImages, 'animals', 10);
    addSlides(slideImages, 'business', 10);
    addSlides(slideImages, 'nightlife', 10);
    addSlides(slideImages, 'cats', 10);
    addSlides(slideImages, 'fashion', 10);
    addSlides(slideImages, 'technics', 10);
    $scope.totalimg = slideImages.length;
    $scope.galleryNumber = 1;
    console.log($scope.galleryNumber);
            
    function getImage(target) {
        var i = target.length
            , p = (($scope.galleryNumber-1)*$scope.setOfImagesToShow)+i;
        console.log("i=" + i + "--" + p);
                
        return slideImages[p];
    }
    function addImages(target, qty) {
                                
        for (var i=0; i < qty; i++) {
            addImage(target);
        }
    }
            
    function addImage(target) {
        target.push(getImage(target));
    }
            
    $scope.slides7 = [];
    $scope.carouselIndex7 = 0;
    $scope.setOfImagesToShow = 3;
    addImages($scope.slides7, $scope.setOfImagesToShow);
    $scope.loadNextImages = function() {
        console.log("loading Next images");
        if (slideImages[slideImages.length-1].id !== $scope.slides7[$scope.slides7.length-1].id) {
            // Go to next set of images if exist
            $scope.slides7 = [];
            $scope.carouselIndex7 = 0;
            ++$scope.galleryNumber;
            addImages($scope.slides7, $scope.setOfImagesToShow);
        } else {
            // Go to first set of images if not exist
            $scope.galleryNumber = 1;
            $scope.slides7 = [];
            $scope.carouselIndex7 = 0;
            addImages($scope.slides7, $scope.setOfImagesToShow);
        }
    }
    $scope.loadPreviousImages = function() {
        if (slideImages[0].id !== $scope.slides7[0].id) {
            // Go to previous set of images if exist
            $scope.slides7 = [];
            $scope.carouselIndex7 = 0;
            --$scope.galleryNumber;
            addImages($scope.slides7, $scope.setOfImagesToShow);
        } else {
            // Go to last set of images if not exist
            console.log("slideimageslength: " + slideImages.length + ", " + slideImages.length-1 / $scope.setOfImagesToShow);
            // console.log("slideimageslength: " + slideImages.length );
            $scope.galleryNumber = slideImages.length / $scope.setOfImagesToShow;
            $scope.slides7 = [];
            $scope.carouselIndex7 = 0;
            addImages($scope.slides7, $scope.setOfImagesToShow);
            console.log("no images left");
        }
                
    }

});
$(document).ready(function () { });