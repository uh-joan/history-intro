'use strict';

angular.module('historyIntroApp')
  .controller('MainCtrl', function ($scope, $http, $location) {
    $http.get('/json/events.json').success(function(data) {
      $scope.episodes = data;
    });

        $scope.orderEpisodes = 'endTime';

        $scope.go = function ( path ) {
            $location.path( "/"+path );
        };

        $scope.clearScenarioQuery = function() {
            $scope.scenarioquery="";
        }

        $scope.IntroOptions = {
            steps:[
                {
                    element: document.querySelector('#step1'),
                    intro: "Hello all! :) This is a memory visualization website"
                },
                {
                    element: '#step2',
                    intro: "Here you can see a list of recent events, with the name, a description and time it happened.",
                    position: 'left'
                },
                {
                    element: '#step3',
                    intro: "Name of the event",
                    position: 'left'
                },
                {
                    element: '#step4',
                    intro: "Short description",
                    position: 'bottom'
                },
                {
                    element: '#step5',
                    intro: "Time it happened",
                    position: 'bottom'
                },
                {
                    element: '#step6',
                    intro: "You can sort the events by time (newest, oldest) or by place of the house where it happened (location)",
                    position: 'bottom'
                },
                {
                    element: '#step7',
                    intro: "You can click anywhere in the event. Get it?"
                }
            ],
            showStepNumbers: false,
            exitOnOverlayClick: true,
            exitOnEsc:true,
            nextLabel: '<strong>NEXT!</strong>',
            prevLabel: '<span style="color:green">Previous</span>',
            //skipLabel: 'Exit',
            doneLabel: 'Yes!'
        };

  });
