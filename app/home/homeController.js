app.controller('homeController', function($scope, Spotify) {
	$scope.title =  "Gen";
	Spotify.getAlbum('0sNOF9WDwhWunNAHPD3Baj').then(function (data) {
	  	console.log(data);
	});

	Spotify.getAlbumTracks('6akEvsycLGftJxYudPjmqK').then(function (data) {
  		console.log(data);
	});
});
