'use strict';

angular.module('historyIntroApp')
  .controller('EventidImagesImageurlCtrl', function ($scope, $http,$location,$routeParams) {
    $http.get('json/events.json').success(function(data) {
      $scope.img = data;
    });

        $scope.img2Show = $routeParams.imageUrl;
        $scope.eventId2Show = $routeParams.eventId;

        $scope.goback = function ( path  ) {
            $location.path( "/"+path);
        };
        $scope.IntroOptions = {
            steps:[
                {
                    element: '#step1',
                    intro: "This is the full picture you have clicked",
                    position: 'left'
                },
                {
                    element: '#step2',
                    intro: "With the name",
                    position: 'bottom'
                },
                {
                    element: '#step3',
                    intro: "Exact time it happened",
                    position: 'bottom'
                },
                {
                    element: '#step4',
                    intro: "The full size picture",
                    position: 'left'
                },
                {
                    element: '#step5',
                    intro: "And here you can go back!",
                    position: 'right'
                }
            ],
            showStepNumbers: false,
            exitOnOverlayClick: true,
            exitOnEsc:true,
            nextLabel: '<strong>NEXT!</strong>',
            prevLabel: '<span style="color:green">Previous</span>',
            skipLabel: 'Exit',
            doneLabel: 'FINISH'
        };

  });


