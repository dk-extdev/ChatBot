console.log("#######################################");
//location.href.indexOf('http://www.westchesterwine.com')!=-1 || 
chrome.storage.sync.get('urlArray', function (result) {
    console.log(JSON.parse(result['urlArray']));
    var returnedArray = JSON.parse(result['urlArray']);
    if(returnedArray.length){
    	for (var i = 0; i < returnedArray.length; i++) {
	    	console.log(returnedArray[i][0]);
	    	if(returnedArray[i][0]){
	    		if(returnedArray[i][0].indexOf(location.hostname)!=-1){
	    			console.log(returnedArray[i][1]);
	    			var appid = returnedArray[i][1];
						window.legolySettings = {appId: appid.trim()};	
						$('head').append('<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">');
						$.ajax({
						  type: "GET",
						  dataType: "json",
						  url: "https://chat-bot.magia.ai/web-chat-bot/dist/static/manifest.json?c=" + Date.now(),
						  success: function( response ) {
						    if (response){
						      console.log(response["app.css"]);
						      console.log(response["app.js"]);
						      $('head').append('<link href="https://chat-bot.magia.ai/web-chat-bot/dist/'+response["app.css"]+'" rel="stylesheet">');
						      $.ajax({
									  type: "GET",
									  dataType: "text",
									  url: 'https://chat-bot.magia.ai/web-chat-bot/dist/'+response["app.js"],
									  success: function( response ) {
									    if (response){
									      //console.log(response);
									      eval(response);
									      console.log(window.legolySettings);
									      window.Legoly ? window.Legoly.default().run() : console.error("There is no app instance loaded")
												//
									    }
									  }
									});
									//window.Legoly ? window.Legoly.default().run() : console.error("There is no app instance loaded")
						    }
						  }
						});    			
	    		}
	    	}
	    };	
    }
});
//window.legolySettings = {appId: "wcat781"};

//$('head').append('<link href="https://chat-bot.v2-dev.magia.ai/web-chat-bot/dist/'+o+'" rel="stylesheet">');
//$('head').append('<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">');	
/*var chat_script = document.createElement('script');
chat_script.setAttribute('src','https://chat-bot.v2-dev.magia.ai/web-chat-bot/dist/'+o);
document.head.appendChild(chat_script);
*/console.log("_________________________________");

