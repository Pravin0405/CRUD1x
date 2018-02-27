app.controller('listEmployee',function ($scope,appDataService) {

    var data = appDataService.collectData();
    console.log('listEmployee',data)
    //collect date from appDataService
    data.then(function (data) {
        $scope.EmpList=[];
        var Emp = data.data;

        for(var i=0; i<Emp.length;i++){
            $scope.EmpList.push(Emp[i]);
        }

    });

});