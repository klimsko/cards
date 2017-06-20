const card1 = new Cards($('#card_1'),1),
			card2 = new Cards($('#card_2'),2),
			card3 = new Cards($('#card_3'),3);

var cards = [card1,card2,card3];

function Cards(card, id){
	this.card = card;
	this.id = id;

	this.backSide = this.card.children('.back');
}

Cards.prototype.highlight = function(){
	this.card.addClass('shadow');
	this.card.css('outline',0).attr("tabindex",-1).focus();
}

Cards.prototype.highlightOff = function(){
	if (this.card.hasClass('shadow')){
		this.card.removeClass('shadow');
	}
}

Cards.prototype.draw = function(){
	this.backSide.empty();

	this.card.toggleClass('flipped');

	if (this.card.hasClass('flipped')){

		var randomNumber = rand(1,3);

		if (randomNumber == this.id){
			this.backSide.html('<p>WYGRAŁEŚ!</p>');

			modalOpen(this.card, 'win');
			
		} else {
			this.backSide.html('<p>Nie martw się, spróbuj ponownie</p>');
			gameOver(this.card);
		}
	}
}





