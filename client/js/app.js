/* global angular $ */

// My house [30.296784, -97.763570]

var leafletApp = angular.module('leafletApp', ['nemLogging', 'ui-leaflet']);


leafletApp.controller("leafletController", [ "$scope", function($scope) {
  angular.extend($scope, {
    center: {
      lat: 30.296784,
      lng: -97.763570,
      zoom: 20
    },
    markers: {

    },
    layers: {
      baselayers: {
        mapbox_streets: {
          name: 'Mapbox Streets-v10',
          type: 'mapbox',
          user: 'hdewey',
          key: 'cj2tbd2lw000e2rnz2lpuvfnl',
          apiKey: 'pk.eyJ1IjoiaGRld2V5IiwiYSI6ImNqMmR2ajZrMDA2NHUzM3M2bWhwaXBwc3MifQ.JriJ-xahYX1RjQhmp72N0A',
        }
      }
    }
  });
}]);

// https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGRld2V5IiwiYSI6ImNqMmR2ajZrMDA2NHUzM3M2bWhwaXBwc3MifQ.JriJ-xahYX1RjQhmp72N0A