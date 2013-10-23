
// ----------------------------------------------------------------------------------------------
// Page 1
//----------------------------------------------------------------------------------------------
// Controller fuer Events

var AppController = function() {

	// Stationen anzeigen
	function showStation() {

		stations = App.stations.getStations();
		
		$("#sendungenList").empty();
		for (var i = 0; i < stations.length; i++) {
	
			var url = 'sendung.html?numPods=100&showPodsSummary=true&url='+stations[i].url;
			$("#sendungenList").append(
			    '<li id="list' + i + '"><a data-role="button" data-transition="slide" onclick="openSiteWhenConnected(\''+url+'\')" href="#" id="link' + i + '">'+stations[i].name+'</a>' +
			    '</li>'
			);
		}		
		$('ul').listview('refresh');
	}

	return {
		initialize : function() {
			console.log("***** showStation");
			showStation();
		}
	};
};

// Controller aufrufen, wenn pageinit von jQM geworfen wird.
$(document).on("pagebeforeshow", "#page1", function(event) {
	console.log("Start initialize call 1 in Controller");
	checkInternetConnection();
	App.controller.initialize();
	console.log("End initialize call 1 in Controller");
});


// ----------------------------------------------------------------------------------------------
// Page 2
//----------------------------------------------------------------------------------------------
/***************************************
 *	Loads all episodes of a single show
 *************************************** */
function loadPodsByUrl(podsUrl, numPods, showPodsSummary) {
	//alert('pods url 2 = '+podsUrl);

	var showTheSummary = 'true';
	if (showPodsSummary == 'true' || showPodsSummary == 'false'){
		showTheSummary = showPodsSummary;
	}
	
    var feed = new google.feeds.Feed(podsUrl);
	feed.setResultFormat(google.feeds.Feed.MIXED_FORMAT);
	feed.setNumEntries(50);
	feed.includeHistoricalEntries();

	feed.load( function(result) {

		var showNumberOfPods = 10;
		if (numPods != null && numPods != 'undefined' && numPods < result.feed.entries.length ){
			showNumberOfPods = numPods;
		} else {
			showNumberOfPods = result.feed.entries.length;
			//alert('feed.entries.length = '+showNumberOfPods);
		}

		//alert('showNumberOfPods = '+showNumberOfPods);
				
		$("#episodenList").empty();
    	for (var i=0; i<showNumberOfPods; i++) {
			var entry = result.feed.entries[i];
   	 		var entryUrl = entry.xmlNode.getElementsByTagName("enclosure")[0].getAttribute("url");
   	 		var entrySize = entry.xmlNode.getElementsByTagName("enclosure")[0].getAttribute("length");
   	 		var sizeInMB = Math.floor(entrySize / 1000000);
   	 		var sizeString = '';
   	 		if (sizeInMB != 0){
   	 			sizeString = ' ('+ sizeInMB +' MB)';
   	 		}
   	 		var contentText = '';
   	 		if (showTheSummary == 'true'){
   	 			contentText = entry.content;
			}
   	 		   	 		
			$("#episodenList").append(
//				    '<li id="list' + i + '"><a data-role="button" class="hide-page-loading-msg" data-ajax="false" target="_blank" href="http://koni.mobi" id="link' + i + '">'+
			   '<li id="list' + i + '"><a data-role="button" onclick="openMediaWhenConnected(\''+entryUrl+'\')" href="#" id="link' + i + '">'+
			   '<h2>'+entry.title + sizeString+'</h2>'+
               '<p>'+contentText+'</p>'+
			    '</a>' +
			    '</li>'
			);
			
    	}
		$('ul').listview('refresh');
	});
}

//Controller aufrufen, wenn pageinit von jQM geworfen wird.
$(document).on("pageinit", "#page2", function(event) {
	console.log("Start initialize call 2 in Controller");

	checkInternetConnection();
	
	var url = $(this).data("url").split("&")[2];
	if (url == null || url == 'undefined'){
		url = gup('url');
		//alert('gup url = '+ url);		
	} else {
		url = url.replace("url=","");  
		//alert('replace url = '+url);
	}

	// if url still undefined then go to previous page
	if (url == null || url == 'undefined'){
		alert('url undefined. Going back...');
		window.location.href='index.html';
	}
	//alert('Pod-Url = '+url);
	loadPodsByUrl(url, '50', 'true');

	console.log("End initialize call 2 in Controller");
});

function openMediaWhenConnected(theUrl){
	// alert(theUrl);
	if (checkInternetConnection()){
		
		if (isFirefoxOS()){
			var activity = new MozActivity(
					{
						name : "view",
						data : { type : [ "video/webm",
						                  "video/mp4",
						                  "video/m4v",
						                  "video/3gpp",
						                  "video/youtube" ],
						                  url : theUrl
								}
					});

		} else {
			//alert('url = '+theUrl);
			location.href='jwplayer/index.html?stream='+theUrl;
		}	
		
	}
}

function openSiteWhenConnected(theUrl){
	// alert(theUrl);
	if (checkInternetConnection()){
			//alert('url = '+theUrl);
			location.href=theUrl;
	}
}
