const container = document.getElementById('card-container');
var activeCard = document.getElementById('active');
var topCard = document.getElementById('top');
var bottomCard = document.getElementById('bottom');
var tempCard;

const handleScroll = (event) => {
  if (event.deltaY < 0) {
    activeCard.classList.remove('active');
    activeCard.classList.add('card-bottom');
    activeCard.id = 'bottom';

    topCard.classList.remove('card-top');
    topCard.classList.add('active');
    topCard.id = 'active';

    bottomCard.classList.remove('card-bottom');
    bottomCard.classList.add('card-top');
    bottomCard.id = 'top';

    tempCard = bottomCard;
    bottomCard = activeCard;
    activeCard = topCard;
    topCard = tempCard;
  } else {
    // Do for scrolling up
    activeCard.classList.remove('active');
    activeCard.classList.add('card-top');
    activeCard.id = 'top';

    bottomCard.classList.remove('card-bottom');
    bottomCard.classList.add('active');
    bottomCard.id = 'active';

    topCard.classList.remove('card-top');
    topCard.classList.add('card-bottom');
    topCard.id = 'bottom';

    tempCard = topCard;
    topCard = activeCard;
    activeCard = bottomCard;
    bottomCard = tempCard;
  }
};

container.addEventListener('wheel', handleScroll);
