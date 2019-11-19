var myMap;
var canvas;
const mappa = new Mappa('Leaflet');

//Harry Styles
var harryLat = 51.5150422;
var harryLng = -0.1107947;

//Louis Tomlison
var louisLat = 53.5221617;
var louisLng = -1.132775;

//Rossini
var rossiniLat = 43.9140235;
var rossiniLng = 12.9159422;

//Ayasofia Kebap
var ayasofiaLat = 45.483581;
var ayasofiaLng = 9.2141961;

//-25° in Vilnius
var vilniusLat = 54.6875797;
var vilniusLng = 25.2783278;

//Former Soviet Union, Saint Petersburg
var urssLat = 59.9309167;
var urssLng = 30.3531107;

//Ivo
var ivoLat = 42.5824986;
var ivoLng = 13.6211757;

//Francesco Totti
var tottiLat = 41.8910487;
var tottiLng = 12.4881384;

// Lets put all our map options in a single object
const options = {
  lat: 0,
  lng: 0,
  zoom: 5.5,
  style: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
}

function preload(){
  // put preload code here
  myLoc = getCurrentPosition();
  harry = loadImage("./assets/harry.png");
	louis = loadImage("./assets/louis.png");
	rossini = loadImage("./assets/rossini.png");
	ayasofia = loadImage("./assets/ayasofia.png");
	vilnius = loadImage("./assets/vilnius.png");
	urss = loadImage("./assets/urss.png");
	ivo = loadImage("./assets/ivo.png");
	totti = loadImage("./assets/totti.png");
}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);

  // update options according to current location
  options.lat = myLoc.latitude;
  options.lng = myLoc.longitude;

  // create a tile map with the options declared
	myMap = mappa.tileMap(options);
	myMap.overlay(canvas);

}

function draw(){

  clear();
	angleMode(DEGREES);

  // text
  fill('#ff00a7');
  stroke ('black');
  strokeWeight(3);
  textFont('Work Sans');
  textSize(40);
  text('How far you are from the things that Azzurra* loves', 100, 70);

  fill('#ff00a7');
  stroke ('black');
  strokeWeight(2);
  textFont('Work Sans');
  textSize(25);
  text('*My roommate', 100, 660);

  // your position
  fill('green');
  stroke ('black');
  strokeWeight(1);
  textSize(16);
  var pointYou = myMap.latLngToPixel(myLoc.latitude, myLoc.longitude);
  ellipse(pointYou.x, pointYou.y, 15);
  text('You are here', pointYou.x + 10, pointYou.y - 10);

  // distances
  var distanceHarry = calcGeoDistance(myLoc.latitude, myLoc.longitude, harryLat, harryLng, "km");
  var distanceLouis = calcGeoDistance(myLoc.latitude, myLoc.longitude, louisLat, louisLng, "km");
  var distanceRossini = calcGeoDistance(myLoc.latitude, myLoc.longitude, rossiniLat, rossiniLng, "km");
  var distanceAyasofia = calcGeoDistance(myLoc.latitude, myLoc.longitude, ayasofiaLat, ayasofiaLng, "km");
  var distanceVilnius = calcGeoDistance(myLoc.latitude, myLoc.longitude, vilniusLat, vilniusLng, "km");
  var distanceUrss = calcGeoDistance(myLoc.latitude, myLoc.longitude, urssLat, urssLng, "km");
  var distanceIvo = calcGeoDistance(myLoc.latitude, myLoc.longitude, ivoLat, ivoLng, "km");
  var distanceTotti = calcGeoDistance(myLoc.latitude, myLoc.longitude, tottiLat, tottiLng, "km");

  //cat cafes
  fill('#ff00a7');
  stroke ('black');
  strokeWeight(1);
  textSize(16);

  var pointHarry = myMap.latLngToPixel(harryLat, harryLng);
  image(harry, pointHarry.x, pointHarry.y, 70, 70);
  text( 'Harry Styles is ' + Math.round(distanceHarry) + 'km away' , pointHarry.x + 30, pointHarry.y - 10);

  var pointLouis = myMap.latLngToPixel(louisLat, louisLng);
  image(louis, pointLouis.x, pointLouis.y, 70, 70);
  text( 'Louis Tomlison is ' + Math.round(distanceLouis) + 'km away' , pointLouis.x + 30, pointLouis.y - 10);

  var pointRossini = myMap.latLngToPixel(rossiniLat, rossiniLng);
  image(rossini, pointRossini.x, pointRossini.y, 70, 70);
  text( 'Pizza Rossini is ' + Math.round(distanceRossini) + 'km away' , pointRossini.x + 30, pointRossini.y - 10);

  var pointAyasofia = myMap.latLngToPixel(ayasofiaLat, ayasofiaLng);
  image(ayasofia, pointAyasofia.x, pointAyasofia.y, 70, 70);
  text( 'Ayasofia Kebap is ' + Math.round(distanceAyasofia) + 'km away' , pointAyasofia.x + 30, pointAyasofia.y - 10);

  var pointVilnius = myMap.latLngToPixel(vilniusLat, vilniusLng);
  image(vilnius, pointVilnius.x, pointVilnius.y, 70, 70);
  text( '-25° in Vilnius is ' + Math.round(distanceVilnius) + 'km away' , pointVilnius.x + 30, pointVilnius.y);

  var pointUrss = myMap.latLngToPixel(urssLat, urssLng);
  image(urss, pointUrss.x, pointUrss.y, 70, 70);
  text( 'Former Sovietic Union (URSS) is ' + Math.round(distanceUrss) + 'km away' , pointUrss.x + 30, pointUrss.y - 10);

  var pointIvo = myMap.latLngToPixel(ivoLat, ivoLng);
  image(ivo, pointIvo.x, pointIvo.y, 70, 70);
  text( 'Ivo is ' + Math.round(distanceIvo) + 'km away' , pointIvo.x + 30, pointIvo.y - 10);

  var pointTotti = myMap.latLngToPixel(tottiLat, tottiLng);
  image(totti, pointTotti.x, pointTotti.y, 70, 70);
  text( 'Francesco Totti is ' + Math.round(distanceTotti) + 'km away' , pointTotti.x + 30, pointTotti.y - 10);

}
