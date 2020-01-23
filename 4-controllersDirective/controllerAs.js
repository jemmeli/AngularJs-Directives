(function() {

  "use strict"

  var controllerAs = function () {

    var template = '<button ng-click="vm.addItem()">Add Item</button><ul>' +
                 '<li ng-repeat="item in vm.items">{{ item.name }}</li></ul>',

        controller = function($scope) {

            //replace all $scope with vm & also in the template variables
            var vm = this;

            $scope.$watch('datasource', function(newVal) {
                vm.items = angular.copy(vm.datasource);
            }, true);

            init();

            function init() {
              vm.items = angular.copy(vm.datasource);
            }

            vm.addItem = function() {
                var name = 'New Directive Controller Item';
                vm.add()(name);
                
                  vm.items.push({
                      name: name
                  });
            }

        };

      return {
          restrict: 'EA', //Default in 1.3+
          scope: {
              datasource: '=',
              add: '&',
          },
          controller: controller,
          controllerAs: 'vm',
          bindToController: true,
          template: template
      };
  };

  angular.module('directivesModule')
    .directive('controllerAs', controllerAs);

}());