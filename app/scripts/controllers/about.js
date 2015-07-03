'use strict';

/**
 * @ngdoc function
 * @name ctCompanionApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ctCompanionApp
 */
angular.module('ctCompanionApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
