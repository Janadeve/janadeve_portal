(function(window){

	  function myLibrary(){
	    var _myLibraryObject = {};

	    var settings = {
	      volume:100,
	      mute:false
	    };

	    _myLibraryObject.setVolume = function(volume){
	         settings.volume = volume;
	         return volume;
	    };
	    
	    _myLibraryObject.setMute = function(muteStatus){
	         if(typeof(muteStatus) === 'boolean'){
	           settings.mute = muteStatus;
	         }else{
	           console.error("You need to disable or enable the sound !");
	         }

	         return settings.mute;
	    };
	    
	    _myLibraryObject.haveSound = function(){
	         return settings.mute;
	    };

    	return _myLibraryObject;
  }

  // We need that our library is globally accesible, then we save in the window
  if(typeof(window.myWindowGlobalLibraryName) === 'undefined'){
    window.$ = myLibrary();
  }
})(window);

