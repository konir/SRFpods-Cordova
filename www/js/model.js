// Model

var Station = Class.extend({
    // Konstruktor
    init: function (icon, name, url, country) {
        this.icon = icon;
        this.name = name;
        this.url = url;
        this.country = country;
        //console.log("class Station in model");
    },
});  

//Klasse Stations - Container fuer Station's
var Stations = Class.extend({
    init: function () {
        this.stationsArray = new Array();
        this.currentStation = 0;
        //console.log("class Stations in model");
    },

    // Erzeugt eine Station und fuegt dieses hinzu.
    createStation: function (icon, name, url, country) {
        // Location erzeugen
        var station = new Station(icon, name, url, country);

        // dem Array hinzufügen
        this.stationsArray.push(station);
    },

    // Fuegt einen Eintrag hinzu - Station-Objekt
    addStation: function (station) {
        // dem Array hinzufügen
        this.stationsArray.push(station);
    },

    getCurrentStation: function () {
        return this.stationsArray[this.currentStation];
        //console.log("getCurrentStation=" + this.currentStation);

        //return this.currentLocation;
    },

    getNumberOfStations: function () {
        return this.stationsArray.length;
    },

    getStations: function () {
        return this.stationsArray;
    }
});
