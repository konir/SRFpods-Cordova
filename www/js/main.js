// App besteht aus:
// Stations (Modell)
// Controller

// Applikation erzeugen
var App = {
	stations : new Stations(),
	controller : new AppController()
};

// Station erzeugen
// ----------------------------------------------------------------------
// Schweiz
// ----------------------------------------------------------------------
App.stations.createStation("./img/tele_baern.png", "1 gegen 100", "http://feeds.sf.tv/podcast/1gegen100", "CH");
App.stations.createStation("./img/tele_baern.png", "10 vor 10", "http://feeds.sf.tv/podcast/10vor10", "CH");
App.stations.createStation("./img/tele_baern.png", "Aeschbacher", "http://feeds.sf.tv/podcast/aeschbacher", "CH");
App.stations.createStation("./img/tele_baern.png", "Arena", "http://feeds.sf.tv/podcast/arena", "CH");
App.stations.createStation("./img/tele_baern.png", "Best Friends", "http://feeds.sf.tv/podcast/bestfriends", "CH");
App.stations.createStation("./img/tele_baern.png", "Bilder zum Feiertag", "http://feeds.sf.tv/podcast/bilderzumfeiertag", "CH");
App.stations.createStation("./img/tele_baern.png", "Börse", "http://feeds.sf.tv/podcast/boerse", "CH");
App.stations.createStation("./img/tele_baern.png", "Box Office", "http://feeds.sf.tv/podcast/boxoffice", "CH");
App.stations.createStation("./img/tele_baern.png", "Club", "http://feeds.sf.tv/podcast/club", "CH");
App.stations.createStation("./img/tele_baern.png", "Comedy aus dem Labor", "http://feeds.sf.tv/podcast/comedyausdemlabor", "CH");
App.stations.createStation("./img/tele_baern.png", "Dahinden am Berg", "http://feeds.sf.tv/podcast/dahindenamberg", "CH");
App.stations.createStation("./img/tele_baern.png", "Das Experiment", "http://feeds.sf.tv/podcast/dasexperiment", "CH");
App.stations.createStation("./img/tele_baern.png", "Die Aelplerfamilie", "http://feeds.sf.tv/podcast/dieaelplerfamilie", "CH");
App.stations.createStation("./img/tele_baern.png", "Die Ferienprofis", "http://feeds.sf.tv/podcast/dieferienprofis", "CH");
App.stations.createStation("./img/tele_baern.png", "Die Millionenfalle", "http://feeds.sf.tv/podcast/diemillionenfalle", "CH");
App.stations.createStation("./img/tele_baern.png", "Die Schweizer", "http://feeds.sf.tv/podcast/dieschweizer", "CH");
App.stations.createStation("./img/tele_baern.png", "Dok", "http://feeds.sf.tv/podcast/dok", "CH");
App.stations.createStation("./img/tele_baern.png", "Dok - Aequator", "http://feeds.sf.tv/podcast/aequator", "CH");
App.stations.createStation("./img/tele_baern.png", "Dok - Auf und davon", "http://feeds.sf.tv/podcast/aufunddavon", "CH");
App.stations.createStation("./img/tele_baern.png", "Dok - Donau", "http://feeds.sf.tv/podcast/donau", "CH");
App.stations.createStation("./img/tele_baern.png", "Dok - Fortsetzung folgt", "http://feeds.sf.tv/podcast/fortsetzungfolgt", "CH");
App.stations.createStation("./img/tele_baern.png", "Dok - Ja ich will (Heiraten)", "http://feeds.sf.tv/podcast/heiraten", "CH");
App.stations.createStation("./img/tele_baern.png", "Dok - Kriminalfälle", "http://feeds.sf.tv/podcast/kriminalfaelle", "CH");
App.stations.createStation("./img/tele_baern.png", "Dok - Seidenstrasse", "http://feeds.sf.tv/podcast/seidenstrasse", "CH");
App.stations.createStation("./img/tele_baern.png", "Donnschtig-Jass", "http://feeds.sf.tv/podcast/donnschtigjass", "CH");
App.stations.createStation("./img/tele_baern.png", "Don't say it - bring it!", "http://feeds.sf.tv/podcast/dontsayitbringit", "CH");
App.stations.createStation("./img/tele_baern.png", "Durch die Blume", "http://feeds.sf.tv/podcast/durchdieblume", "CH");
App.stations.createStation("./img/tele_baern.png", "ECO", "http://feeds.sf.tv/podcast/eco", "CH");
App.stations.createStation("./img/tele_baern.png", "Einstein", "http://feeds.sf.tv/podcast/einstein", "CH");
App.stations.createStation("./img/tele_baern.png", "Focus", "http://feeds.sf.tv/podcast/focus", "CH");
App.stations.createStation("./img/tele_baern.png", "Giacobbo / Müller", "http://feeds.sf.tv/podcast/giacobbomueller", "CH");
App.stations.createStation("./img/tele_baern.png", "Glanz & Gloria", "http://feeds.sf.tv/podcast/glanzundgloria", "CH");
App.stations.createStation("./img/tele_baern.png", "Happy Day", "http://feeds.sf.tv/podcast/happyday", "CH");
App.stations.createStation("./img/tele_baern.png", "Jobtausch", "http://feeds.sf.tv/podcast/jobtausch", "CH");
App.stations.createStation("./img/tele_baern.png", "Kassensturz", "http://feeds.sf.tv/podcast/kassensturz", "CH");
App.stations.createStation("./img/tele_baern.png", "Kulturplatz", "http://feeds.sf.tv/podcast/kulturplatz", "CH");
App.stations.createStation("./img/tele_baern.png", "Lanzi", "http://feeds.sf.tv/podcast/lanzi", "CH");
App.stations.createStation("./img/tele_baern.png", "Literaturclub", "http://feeds.sf.tv/podcast/literaturclub", "CH");
App.stations.createStation("./img/tele_baern.png", "Metzgete", "http://feeds.sf.tv/podcast/metzgete", "CH");
App.stations.createStation("./img/tele_baern.png", "Meteo", "http://www.srf.ch/player/tv/rss/sendung?id=77ea500a-3748-480a-83d6-015213b10024", "CH");
App.stations.createStation("./img/tele_baern.png", "Minisguard", "http://feeds.sf.tv/podcast/minisguard", "CH");
App.stations.createStation("./img/tele_baern.png", "Mitenand", "http://feeds.sf.tv/podcast/mitenand", "CH");
App.stations.createStation("./img/tele_baern.png", "Myriam und die Meisterbäcker", "http://feeds.sf.tv/podcast/meisterbaecker", "CH");
App.stations.createStation("./img/tele_baern.png", "myStory", "http://feeds.sf.tv/podcast/mystory", "CH");
App.stations.createStation("./img/tele_baern.png", "myZambo", "http://feeds.sf.tv/podcast/myzambo", "CH");
App.stations.createStation("./img/tele_baern.png", "Nachtwach", "http://pod.drs.ch/nachtwach_mpx.xml", "CH");
App.stations.createStation("./img/tele_baern.png", "Oli Mega Vlog", "http://feeds.sf.tv/podcast/oli", "CH");
App.stations.createStation("./img/tele_baern.png", "Pimp it or kick it", "http://feeds.sf.tv/podcast/pimpitorkickit", "CH");
App.stations.createStation("./img/tele_baern.png", "Potzmusig", "http://feeds.sf.tv/podcast/potzmusig", "CH");
App.stations.createStation("./img/tele_baern.png", "Puls", "http://feeds.sf.tv/podcast/puls", "CH");
App.stations.createStation("./img/tele_baern.png", "Reporter", "http://feeds.sf.tv/podcast/reporter", "CH");
App.stations.createStation("./img/tele_baern.png", "Rundschau", "http://feeds.sf.tv/podcast/rundschau", "CH");
App.stations.createStation("./img/tele_baern.png", "Samschtig Jass", "http://feeds.sf.tv/podcast/samschtigjass", "CH");
App.stations.createStation("./img/tele_baern.png", "Schawinski", "http://feeds.sf.tv/podcast/schawinski", "CH");
App.stations.createStation("./img/tele_baern.png", "Schweiz Aktuell", "http://feeds.sf.tv/podcast/schweizaktuell", "CH");
App.stations.createStation("./img/tele_baern.png", "Schweizweit", "http://feeds.sf.tv/podcast/schweizweit", "CH");
App.stations.createStation("./img/tele_baern.png", "Schwiizer Chuchi mit Ivo Adam", "http://feeds.sf.tv/podcast/schwiizerchuchi", "CH");
App.stations.createStation("./img/tele_baern.png", "Sportlounge", "http://feeds.sf.tv/podcast/sportlounge", "CH");
App.stations.createStation("./img/tele_baern.png", "SRF bi de Lüt", "http://feeds.sf.tv/podcast/sfbideluet", "CH");
App.stations.createStation("./img/tele_baern.png", "SRF bi de Lüt - Live", "http://feeds.sf.tv/podcast/sfbideluetlive", "CH");
App.stations.createStation("./img/tele_baern.png", "Stars", "http://feeds.sf.tv/podcast/stars", "CH");
App.stations.createStation("./img/tele_baern.png", "Sternstunde Kunst", "http://feeds.sf.tv/podcast/sternstundekunst", "CH");
App.stations.createStation("./img/tele_baern.png", "Sternstunde Philosophie", "http://feeds.sf.tv/podcast/sternstundephilosophie", "CH");
App.stations.createStation("./img/tele_baern.png", "Sternstunde Religion", "http://feeds.sf.tv/podcast/sternstundereligion", "CH");
App.stations.createStation("./img/tele_baern.png", "Street Games", "http://feeds.sf.tv/podcast/streetgames", "CH");
App.stations.createStation("./img/tele_baern.png", "Svizra rumantscha", "http://feeds.sf.tv/podcast/svizrarumantscha", "CH");
App.stations.createStation("./img/tele_baern.png", "SwissDinner", "http://www.telezueri.ch/sites/default/files/podcast_437_itunes.rss", "CH");
App.stations.createStation("./img/tele_baern.png", "Tacho - das Automagazin", "http://feeds.sf.tv/podcast/tacho", "CH");
App.stations.createStation("./img/tele_baern.png", "Tagesschau", "http://feeds.sf.tv/podcast/ts20", "CH");
App.stations.createStation("./img/tele_baern.png", "Telesguard", "http://feeds.sf.tv/podcast/telesguard", "CH");
App.stations.createStation("./img/tele_baern.png", "Tierische Freunde", "http://feeds.sf.tv/podcast/tierischefreunde", "CH");
App.stations.createStation("./img/tele_baern.png", "Top Secret", "http://feeds.sf.tv/podcast/topsecret", "CH");
App.stations.createStation("./img/tele_baern.png", "Tschanz mit allem", "http://feeds.sf.tv/podcast/tschanzmitallem", "CH");
App.stations.createStation("./img/tele_baern.png", "Twist - Die Sketch Comedy", "http://feeds.sf.tv/podcast/twist", "CH");
App.stations.createStation("./img/tele_baern.png", "Üse Zoo", "http://feeds.sf.tv/podcast/uesezoo", "CH");
App.stations.createStation("./img/tele_baern.png", "Top shots", "http://feeds.sf.tv/podcast/topshots", "CH");
App.stations.createStation("./img/tele_baern.png", "Virus TV", "http://feeds.sf.tv/podcast/virus", "CH");
App.stations.createStation("./img/tele_baern.png", "Winter-Challenge", "http://feeds.sf.tv/podcast/winterchallenge", "CH");
App.stations.createStation("./img/tele_baern.png", "Wort zum Sonntag", "http://feeds.sf.tv/podcast/wortzumsonntag", "CH");
