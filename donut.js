function Shops(location, minCustomer, maxCustomer, avgDonut) {
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgDonut = avgDonut;

  this.perHourArray = [];
  this.total = 0;
}

Shops.prototype.donutsHour = function() {
  var customerPerHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
  return donutsPerHour = Math.floor(customerPerHour * this.avgDonut);
};

Shops.prototype.totals = function() {
  for (var z = 0; z < 12; z++) {
    this.perHourArray[z] = donutsPerHour;
    this.total += donutsPerHour;
  }
};


var hours = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

var s1 = new Shops('Downtown', 8, 43, 4.50);
var s2 = new Shops('Capitol Hill', 4, 37, 2.00);
var s3 = new Shops('South Lake Union', 9, 23, 6.33);
var s4 = new Shops('Wedgewood', 2, 28, 1.25);
var s5 = new Shops('Ballard', 8, 58, 3.75);

var places = [s1, s2, s3, s4, s5];


var table = document.getElementById('table');


for(var i = 0; i < places.length; i++) {
  var locationRow = document.createElement('tr');
  table.appendChild(locationRow);
  var placesName = document.createElement('td');
  locationRow.appendChild(placesName);
  placesName.textContent = places[i].location;
  var totals = 0;

  for(var d = 0; d < hours.length; d++) {
    var donutData = document.createElement('td');
    var placesData = places[i].donutsHour();
    var tableText = document.createTextNode(placesData);
    totals += placesData;
    locationRow.appendChild(donutData);
    donutData.appendChild(tableText);
  }

    var totalTable = document.createElement('td');
    var totalsText = document.createTextNode(totals);
    locationRow.appendChild(totalTable);
    totalTable.appendChild(totalsText);
}





