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
    'ui.router',
    'ngMaterial'
])
.config(function($stateProvider, $urlRouterProvider,$mdThemingProvider, $mdIconProvider) {
  //For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/sessions");
  $stateProvider
    .state('sessions', {
      url: "/sessions",
      templateUrl: "views/sessions.html",
      controller: "SessionsCtrl as sessions"
    })
  .state('session', {
    url: "/session",
    templateUrl: "views/session.html",
    controller: "SessionCtrl as session"
  })
  .state('speakers', {
    url: "/speakers",
    templateUrl: "views/speakers.html",
    controller: "SpeakersCtrl as speakers"
  })
  .state('speaker', {
    url: "/speaker",
    templateUrl: "views/speaker.html",
    controller: "SpeakerCtrl as speaker"
  })
  .state('questionnaire', {
    url: "/questionnaire",
    templateUrl: "views/questionnaire.html",
    controller: "QuestionnaireCtrl as questionnaire"
  })
  .state('plan', {
    url: "/plan",
    templateUrl: "views/plan.html",
    controller: "PlanCtrl as plan"
  })
  .state('commentaires', {
    url: "/commentaires",
    templateUrl: "views/commentaires.html",
    controller: "CommentairesCtrl as commentaires"
  });

  $mdIconProvider
    .icon("menu", "bower_components/material-design-icons/navigation/svg/production/ic_menu_24px.svg")
    .icon("speakers", "bower_components/material-design-icons/social/svg/production/ic_people_24px.svg")
    .icon("plan", "bower_components/material-design-icons/maps/svg/production/ic_map_24px.svg")
    .icon("commentaires", "bower_components/material-design-icons/communication/svg/production/ic_comment_24px.svg")
    .icon("sessions", "bower_components/material-design-icons/action/svg/production/ic_theaters_24px.svg");
  $mdThemingProvider.theme('default')
    .primaryPalette('red')
    .accentPalette('blue');
})
.controller("SessionsCtrl", function SessionsCtrl($mdSidenav, $state){
  var self = this;
  self.toggleMenu = toggleMenu;
  self.go = goState;
  self.selected     = null;

  function toggleMenu() {
    $mdSidenav('left').toggle();
  }

  function goState(s){
    self.toggleMenu();
    $state.go(s);
  }
})
.controller("SessionCtrl", function SessionCtrl(){
  var self = this;
})
.controller("SpeakersCtrl", function SpeakersCtrl(){
  var self = this;
})
.controller("SpeakerCtrl", function SpeakerCtrl(){
  var self = this;
})
.controller("PlanCtrl", function PlanCtrl(){
  var self = this;
})
.controller("QuestionnaireCtrl", function QuestionnaireCtrl(){
  var self = this;
})
.controller("CommentairesCtrl", function CommentairesCtrl(){
  var self = this;
})
;
