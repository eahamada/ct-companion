(function(){
'use strict';

/**
 * @ngdoc overview
 * @name ctCompanionApp
 * @description
 * # ctCompanionApp
 *
 * Main module of the application.
 */
angular
  .module('ctCompanionApp', [
    'ngAnimate',
	'ngMaterial',
'ui.router',
	'users'
  ]) .config(function($mdThemingProvider, $mdIconProvider,$stateProvider, $urlRouterProvider){
 $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'views/partial-home.html'
        })
 // nested list with just some random string data
    .state('home.paragraph', {
        url: '/paragraph',
        template: 'I could sure use a drink right now.'
    })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit       
        });
                  $mdIconProvider
                      .defaultIconSet("./images/svg/avatars.svg", 128)
                      .icon("menu"       , "./images/svg/menu.svg"        , 24)
                      .icon("share"      , "./images/svg/share.svg"       , 24)
                      .icon("google_plus", "./images/svg/google_plus.svg" , 512)
                      .icon("hangouts"   , "./images/svg/hangouts.svg"    , 512)
                      .icon("twitter"    , "./images/svg/twitter.svg"     , 512)
                      .icon("phone"      , "./images/svg/phone.svg"       , 512);
                      $mdThemingProvider.theme('default')
                          .primaryPalette('brown')
                          .accentPalette('red');
              });
})();
