app.service('appDataService', function($q,$http) {
    var data = this;
    data.collectData = function () {
        var defer = $q.defer();
        $http.get('../database/employee.json').then(
            function (data) {
                //console.log("Data in service", data);
                defer.resolve(data);
            }, function () {
                defer.reject('could not find someFile.json');
            });
        return defer.promise;
    };



});