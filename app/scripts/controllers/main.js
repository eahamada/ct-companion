'use strict';

/**
 * @ngdoc function
 * @name ctCompanionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ctCompanionApp
 */
angular.module('ctCompanionApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
