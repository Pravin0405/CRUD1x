app.controller('searchEmployee',function ($scope,appDataService) {

        var data = appDataService.collectData();

    //collect date from appDataService
        data.then(function (data) {
            $scope.EmpList=[];
            var Emp = data.data;

            for(var i=0; i<Emp.length;i++){
                $scope.EmpList.push(Emp[i]);
            }

        });



//search by city or by name function
    $scope.search = function(item) {
        if (!$scope.query || (item.name.toLowerCase().indexOf($scope.query) != -1) || (item.address.city.toLowerCase().indexOf($scope.query.toLowerCase()) != -1) ){
            return true;
        }
        return false;
    };

});