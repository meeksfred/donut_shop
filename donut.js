
function Shops(location, minCustomer, maxCustomer, avgDonut) {
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgDonut = avgDonut;

  this.perHourArray = [];
  this.total = 0;
}

Shops.prototype.donutsHour = function() {
  for (var z = 0; z < 12; z++) {
    var customerPerHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
    var donutsPerHour = Math.floor(customerPerHour * this.avgDonut);
    return donutsPerHour;
    this.perHourArray[z] = donutsPerHour;
    this.total += donutsPerHour;
  }
}



var hours = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];


var places = [];
var downtown = new Shops('Downtown', 8, 43, 4.50);
var capitolhill = new Shops('Capitol Hill', 4, 37, 2.00);
var southlakeunion = new Shops('South Lake Union', 9, 23, 6.33);
var wedgewood = new Shops('Wedgewood', 2, 28, 1.25);
var ballard = new Shops('Ballard', 8, 58, 3.75);
places.push(downtown);
places.push(capitolhill);
places.push(southlakeunion);
places.push(wedgewood);
places.push(ballard);


var table = document.getElementById('table');

Shops.prototype.render = function() {

  var locationRow = document.createElement('tr');
  table.appendChild(locationRow);
  var placesName = document.createElement('td');
  locationRow.appendChild(placesName);
  placesName.textContent = this.location;
  var totals = 0;

    for(var d = 0; d < hours.length; d++) {
      var donutData = document.createElement('td');
      var placesData = this.donutsHour();
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

function clearTable() {
  table.innerHTML = '';
}

function renderTable() {
  places.forEach(function(shop) {
    shop.render(shop);
  })
}

downtown.render();
capitolhill.render();
southlakeunion.render();
wedgewood.render();
ballard.render();


var q = document.getElementById('form');
q.addEventListener('submit', function(event) {
  event.preventDefault();
  var newShop = new Shops(event.target.newLocationName.value, event.target.newMinCustomers.value, event.target.newMaxCustomers.value, event.target.newAverageDonuts.value);

    for (var i = 0; i < places.length; i++) {
    var updateShop = places[i];
    if (newShop.location === updateShop.location) {
      places.splice(i, 1, newShop);
      clearTable();
      renderTable();
      break;
    }
  }

    if (newShop.location !== updateShop.location ) {
      newShop.render();
      places.push(newShop);
    }



  event.target.newLocationName.value = null;
  event.target.newMinCustomers.value = null;
  event.target.newMaxCustomers.value = null;
  event.target.newAverageDonuts.value = null;

})









