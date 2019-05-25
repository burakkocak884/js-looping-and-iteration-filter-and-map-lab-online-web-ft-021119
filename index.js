function driversWithRevenueOver(drivers, revenue){

return drivers.filter(function (driver){
	if( driver.revenue > revenue){
		return driver;
	}
});
}

function driverNamesWithRevenueOver(drivers, revenue){
 return driversWithRevenueOver(drivers,revenue).map(function(eachDriver){
 		 return eachDriver.name;
 
 	});

}
function exactMatch(drivers, attr){
return drivers.filter(function(driver){
 for (const key in attr){
 	// debugger;
 	if (driver[key] === attr[key]){
 		return driver;
 	}
 	}		
 	})
}

function exactMatchToList(drivers,attr){
	return exactMatch(drivers,attr).map(function(driver){
	return	driver.name;
	});
}


// Code your solution here:
