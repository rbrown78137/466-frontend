//Used to create information for storefront from name input
function createCard(cardName) {
  //used to connect card name to Img
  const actualPath = require(`../../assets/Blocks/${cardName}.jpg`);

  var card = {
    //get the name
    name: cardName.toString(),
    //get the image path with the name inserted
    img: actualPath,
    //points can be a potential input eventually but right now they're all 20
    points: 20,
    //by default, all icons are not purchased but this will be updated as user buys more
    cardIsPurchased: false,
  };
  return card;
}

export default createCard;
