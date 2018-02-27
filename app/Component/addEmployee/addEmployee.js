app.controller('addEmployee',function ($scope,appDataService,$state) {

    $scope.formVisible=false;

    var data = appDataService.collectData();
    //collect date from appDataService  service
    data.then(function (data) {
        $scope.EmpList=[];
        var Emp = data.data;
        for(var i=0; i<Emp.length;i++){
            $scope.EmpList.push(Emp[i]);
        }
        $scope.EmpModel = {
            Id: $scope.EmpList.length+1,
            phone: '',
            Name: '',
            address:{
                city:'',
                postalCode:'',
                address_line1:'',
                address_line2:''
            }

        };



    });
//add new button
    $scope.addNew=function () {
        $scope.formVisible=true;
        $scope.selectForm=false;
        ClearModel();
    };

//save data  function
    $scope.AddData = function () {
        var _emp = {
            id: $scope.EmpList.length+1,
            name: $scope.EmpModel.name,
            phone: $scope.EmpModel.phone,
            address:{
                city: $scope.EmpModel.address.city,
                address_line1: $scope.EmpModel.address.address_line1,
                address_line2: $scope.EmpModel.address.address_line2,
                postal_code: $scope.EmpModel.address.postalCode
            }
        };
        $scope.formVisible=false;
        $scope.EmpList.push(_emp);
        ClearModel();
    };
// bind data to the html
    $scope.BindSelectedData = function (emp) {
        $scope.formVisible=true;
        $scope.selectForm=true;
        $scope.EmpModel.Id = emp.id;
        $scope.EmpModel.name = emp.name;
        $scope.EmpModel.phone = emp.phone;
        $scope.EmpModel.address.address_line1=emp.address.address_line1;
        $scope.EmpModel.address.address_line2=emp.address.address_line2;
        $scope.EmpModel.address.city=emp.address.city;
        $scope.EmpModel.address.postalCode=emp.address.postal_code;
    };
//save edited
    $scope.UpdateData = function () {
        _.each($scope.EmpList, function (e) {
            if (e.id == $scope.EmpModel.Id) {
                e.name = $scope.EmpModel.name;
                e.phone = $scope.EmpModel.phone;
                e.address.address_line1=$scope.EmpModel.address.address_line1;
                e.address.address_line2=$scope.EmpModel.address.address_line2;
                e.address.city=$scope.EmpModel.address.city;
                e.address.postal_code=$scope.EmpModel.address.postalCode;
            }
        });
        $scope.formVisible=false;
        ClearModel();
    };
//clear data
    function ClearModel() {
        $scope.EmpModel.Id =  $scope.EmpList.length+1;
        $scope.EmpModel.name = '';
        $scope.EmpModel.phone = '';
        $scope.EmpModel.address.address_line1='';
        $scope.EmpModel.address.address_line2='';
        $scope.EmpModel.address.city='';
        $scope.EmpModel.address.postalCode='';

    }
});