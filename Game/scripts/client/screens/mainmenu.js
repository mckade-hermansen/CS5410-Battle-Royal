BattleRoyal.screens['main-menu'] = (function(game) {
	'use strict';
	
	function initialize() {
		console.log('main menu is inited!');
		//
		// Setup each of menu events for the screens
		// document.getElementById('id-join-game').addEventListener(
		// 	'click',
		// 	function() {game.showScreen('game-play'); });
		
		// document.getElementById('id-high-scores').addEventListener(
		// 	'click',
		// 	function() { game.showScreen('high-scores'); });
		
		// document.getElementById('id-help').addEventListener(
		// 	'click',
		// 	function() { game.showScreen('help'); });
		
		document.getElementById('id-credits').addEventListener(
			'click',
			function() { game.showScreen('credits'); });
		document.getElementById('id-join-room').addEventListener(
			'click',
			function() { game.showScreen('joinroom'); });
		document.getElementById('id-game-play').addEventListener(
			'click',
			function() { game.showScreen('game-play'); });



			
	}
	
	function run() {
		console.log('main menu is runned!');
		//
		// I know this is empty, there isn't anything to do.
	}
	
	return {
		initialize : initialize,
		run : run
	};
}(BattleRoyal.game));
