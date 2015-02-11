$(document).ready(function(){

	$(function(){
	  $('#search-term').submit(function(event){
	    event.preventDefault();
	    var searchTerm = $('#query').val();
	    getRequest(searchTerm);
	  });
	});

	function getRequest(searchTerm){
	  var params = {
	  	part: 'snippet',
	    key: 'AIzaSyDU8SqK32jNb6wdalq_57-ICqfDJKEcL7g',
	    q: searchTerm,
//	    r: 'json'
	  };
	  url = 'https://www.googleapis.com/youtube/v3/search';

	  $.getJSON(url, params, function(data){
	  	var result = data.items[0].snippet.thumbnails.default.url;
	  	var image = '<img id="image" src="' +result+ '"/>'
	    console.log(data);
	    console.log(result);
	    console.log(image);
	    // $.each(results, function(index, value){
	    // 	image = '<img id="image" src="' +result+ '"/>'
	    // })
	    $("#search-results").append(image);
	  });
}

	// function showResults(results){
	//   var html = "";
	//   $.each(results, function(index,value){
	//     html += '<p>' + value.Title + '</p>';
	//     console.log(value.Title);
	//   });
	//   $('#search-results').html(html);
	// }

});