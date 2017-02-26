/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundscore, activePlayer, dice, gamePlaying, winScore, gameScoreSelection, doubleScore;

init();



document.querySelector('.btn-roll').addEventListener('click', function(){ //функција за клик roll dice ви хтмл документот
    if (gamePlaying){
			dice = Math.floor(Math.random() * 6) + 1; // рандом дефинирање бирање на бројка 
       		var diceDom = document.querySelector('.dice-' + activePlayer); //варијабла за манипулација на .dice класата во html документот
    		diceDom.style.display = 'block'; // прикажување на коцката во html документот - 'none' за да се сокрие
    		diceDom.src = 'dice-' + dice + '.png'; //селектирање на 
		//која слика да се покаже од коцките 1-6 
		if (doubleScore === 6 && dice === 6){
			scores[activePlayer] = 0;
			document.querySelector('#score-' + activePlayer).textContent = '0';
		}else if (dice !== 1) {
		//Add Number
		roundScore += dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
		
		}else{
			nextPlayer();
	  }
		doubleScore = dice;		
		}
	});
		

document.querySelector('.btn-hold').addEventListener('click', function(){
			if(gamePlaying){
				scores[activePlayer] += roundScore;
				document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
			
			if (scores[activePlayer] >= winScore){
				document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
				document.querySelector('.dice-' + activePlayer).style.display = 'none';
				document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
				document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
				gamePlaying = false;
			}else{
				nextPlayer();
				}
			}
})
		

function nextPlayer(){
	//Next Player
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;
	
	document.querySelector('#current-0').textContent = '0';
	document.querySelector('#current-1').textContent = '0';
	
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	
	document.querySelector('.dice-0').style.display = 'none';
	document.querySelector('.dice-1').style.display = 'none';
}

		
		
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
	
	gameScoreSelection = document.getElementById("selectpicker").selectedIndex;
		winScore = document.getElementsByTagName("option")[gameScoreSelection].value
	gamePlaying = true;
	
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
			
	document.querySelector('.dice-0').style.display = 'none';
	document.querySelector('.dice-1').style.display = 'none';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.querySelector('#name-0').textContent = 'Player 1';
	document.querySelector('#name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');	
	document.querySelector('.player-0-panel').classList.add('active');
	
}




