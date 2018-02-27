app.filter('numberFilter',function(){
	return function( input ) {
      // If the data is not a number.
		if(isNaN(input)) {
      	return "NA";
    }else{
        return input;
    }
	}    
});
