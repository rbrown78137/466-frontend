//Used to create information for avatar popup from name input

function createAvatar(avatarName) {
  //used to connect avatar name to Img
  const actualPath = require(`../../assets/Avatars/${avatarName}.png`);

  var avatar = {
    //get the name
    name: avatarName.toString(),
    //get the image path with the name inserted
    img: actualPath,
  };
  return avatar;
}

export default createAvatar;
