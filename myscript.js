angular.module('myapp', [])
    .controller('MainController', ['$scope', function($scope) {
        $scope.tasks = [
        ];
        $scope.addNew = function() {
            $scope.tasks.push({"body":$scope.newtaskBody , "done":false});
            $scope.newtaskBody = '';
        };
        $scope.getDoneCount = function() {
            var count=0;
            angular.forEach($scope.tasks,function(task){
                count += task.done ? 0 : 1;
            });
            return count;
        };
        $scope.deleteDone = function() {
            var oldTasks=$scope.tasks;
            $scope.tasks=[];
            angular.forEach(oldTasks, function(task){
                if(!task.done) $scope.tasks.push(task);
            });
        };
    }]);
