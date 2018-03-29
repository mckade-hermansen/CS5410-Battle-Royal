// ------------------------------------------------------------------
// 
// This is the game object.  Everything about the game is located in 
// this object.
//
// ------------------------------------------------------------------

MyGame.pregame = (function(screens) {
	'use strict';
	
	//------------------------------------------------------------------
	//
	// This function is used to change to a new active screen.
	//
	//------------------------------------------------------------------
	function showScreen(id) {
		let screen = 0;
		let active = null;
		//console.log('we are here with id: ', id);
		//
		// Remove the active state from all screens.  There should only be one...
		active = document.getElementsByClassName('active');
		for (screen = 0; screen < active.length; screen++) {
			active[screen].classList.remove('active');
		}
		//
		// Tell the screen to start actively running
		screens[id].run();
		//
		// Then, set the new screen to be active
		document.getElementById(id).classList.add('active');
	}

	//------------------------------------------------------------------
	//
	// This function performs the one-time game initialization.
	//
	//------------------------------------------------------------------
	function initialize() {
		let screen = null;
		//
		// Go through each of the screens and tell them to initialize
		for (screen in screens) {
			if (screens.hasOwnProperty(screen)) {
				screens[screen].initialize();
			}
		}
		
		//
		// Make the main-menu screen the active one
		showScreen('main-menu');
	}

	//request the high scores from the server
	function requestHighScores(){
		MyGame.main.requestHighScores();
	}

	//get the high scores
	function getHighScores(){
		return MyGame.main.getHighScores();
	}

	MyGame.main 
	
	return {
		initialize : initialize,
		showScreen : showScreen,
		requestHighScores: requestHighScores,
		getHighScores: getHighScores,
	};
}(MyGame.screens));
