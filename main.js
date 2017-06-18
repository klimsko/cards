var count = -1;

const modal = $('#myModal');
const close = $('.close');
const contactForm = $('.formTitle');
const	confBtn = $('input[type=button]');
const confWindow = $('.confirm');

// RANDOM function ------------------------
function rand(min, max) {
  var argc = arguments.length
  if (argc === 0) {
    min = 1
    max = 2147483647
  } else if (argc === 1) {
    throw new Error('Warning: rand() expects exactly 2 parameters, 1 given')
  }
  return Math.floor(Math.random() * (max - min + 1)) + min

}

$('.btn button').click(function(){
	contactForm.html('<h1>Formularz kontaktowy</h1>');
	modalOpen();
})

confBtn.click(function(){
	confWindow.show();
})


keyControl('on');

function gameOver(currentCard){
	keyControl('off');

	flippCard(currentCard);
}


function keyControl(keySwitch){
	if (keySwitch == 'on'){
		$(document).on('keydown', keys);
	} else if (keySwitch == 'off') {
		$(document).off('keydown', keys);
	}
}

function flippCard(currentCard){
	setTimeout(function(){

		if (currentCard){
			currentCard.toggleClass('flipped');
		}

		if (modal.css('display') == 'none'){
			keyControl('on');
		}

	}, 2000);
}

function modalOpen(currentCard, win){
	keyControl('off');

	if (win == 'win'){
		contactForm.html('<h1>Wygrałeś!<br /> Odbierz nagrodę</h1>');

		setTimeout(function(){
			modal.show();
		}, 2000);

	} else modal.show();

	if (currentCard){
		flippCard(currentCard);
	}

}

$(window).click(function(e){
	if (e.target == modal[0] || e.target == close[0]){
		modal.hide();
		confWindow.hide();
		keyControl('on');
	}
})


function keys(e){
	if (e.which == 39 || e.which == 40){
		e.preventDefault();

		for (let i = 0; i < cards.length; i++){
			cards[i].highlightOff();
		}

		count++;

		if (count >= 3){
			count = 0;
		}

		cards[count].highlight();
		
	} else if (e.which == 37 || e.which == 38){
		e.preventDefault();

		for (let i = 0; i < cards.length; i++){
			cards[i].highlightOff();
		}

		count--;

		if (count < 0){
			count = 2;
		}

		cards[count].highlight();
	
	} else if (e.which == 13){

			if (count != -1){
				cards[count].draw();
			}
		}
}