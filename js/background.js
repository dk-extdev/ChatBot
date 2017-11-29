function saveUrlData(){
	var urlArray = [[]];
	$.ajax({
	  type: "GET",
	  dataType: "text",
	  url:chrome.extension.getURL('ext.txt'),
	  success: function( response ) {
	    if (response){
	      console.log(response);
	      var textByLine = response.split("\n")
	      if(textByLine.length){
	      	for (var i=0; i < textByLine.length; i++) {
	      		if(textByLine!=""){
	      			var lineresults = textByLine[i].split(',');
		      		if(lineresults[0]!=""){
		      			urlArray.push([lineresults[0],lineresults[1]]);
		      		}	
	      		}
	      	};
	      }
				chrome.storage.sync.set({'urlArray': JSON.stringify(urlArray)}, function() {
					console.log('saved');
				});
	    }
	  }
	});
}
saveUrlData();
setInterval(function(){ saveUrlData(); }, 10000);

