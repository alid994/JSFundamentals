angular.module('touristApp', [])
  .controller('MainController', ['$scope', function($scope) {
    $scope.destinations = [
      {
        name: 'Paris',
        image: 'https://via.placeholder.com/400x300.png?text=Paris',
        description: 'The city of love and the Eiffel Tower',
        activities: ['Eiffel Tower', 'Notre Dame', 'Seine River Cruise']
      },
      {
        name: 'Rome',
        image: 'https://via.placeholder.com/400x300.png?text=Rome',
        description: 'The Eternal City and home of the Colosseum',
        activities: ['Colosseum', 'Vatican City', 'Trevi Fountain']
      },
      {
        name: 'New York City',
        image: 'https://via.placeholder.com/400x300.png?text=New+York+City',
        description: 'The city that never sleeps',
        activities: ['Statue of Liberty', 'Central Park', 'Empire State Building']
      }
    ];
  }]);
