$(document).ready(function()
{
	$("#btnVideo").click(function() {
		var activity = new MozActivity(
		{
			name : "view",
			data : { type : [ "video/webm",
			                  "video/mp4",
			                  "video/m4v",
			                  "video/3gpp",
			                  "video/youtube" ],
			                  url : "http://podcastsource.sf.tv/nps/245252172/1477.6/10vor10+vom+15.10.2013/podcast/10vor10/2013/10/10vor10_20131015_215000_v_podcast_h264_q10.mp4"
					}
		});
	});
		
	//View Web Page        
	$("#btnViewWebPage").click(function() {
		var openURL = new MozActivity({
			name : "view",
			data : {
						type : "url",
						url : "http://koni.mobi"
					}
			});
	});
	
});