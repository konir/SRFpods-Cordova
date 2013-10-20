/* Get URL Parameter */
function gup(name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regexS = "[\\?&]" + name + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.href);
	if (results == null)
		return "";
	else
		return results[1];
}

function isFirefoxOS(){
	var userAgentFFos = "Mozilla/5.0 (Mobile; rv:";
	var userAgent = navigator.userAgent;
	//alert(userAgent);
	if (userAgent.indexOf(userAgentFFos) != -1){
		return true;
	}
	return false;
}
function checkInternetConnection() {
	var isOnLine = navigator.onLine;
	if (isOnLine) {
		//alert('connected');
		return true;
	} else {
		alert('Sie sind nicht mit dem Internet verbunden!');
		return false;
	}
}

function doesConnectionExist() {
    var xhr = new XMLHttpRequest();
    //var file = "https://www.google.com/images/srpr/logo6w.png";
    var file = "http://www.rothconsulting.com/images/rc_big.gif";
    var randomNum = Math.round(Math.random() * 10000);
     
    xhr.open('HEAD', file + "?rand=" + randomNum, false);
     
    try {
        xhr.send();
         
        if (xhr.status >= 200 && xhr.status < 304) {
        	alert('Connected !!!');
            return true;
        } else {
        	alert('NOT Connected !!!');
            return false;
        }
    } catch (e) {
    	alert('NOT Connected - with exception !!: '+e);
    	return false;
    }
}