export class DataFunctions {
  static user;
  static url = "https://sewebappryanbrown.azurewebsites.net";
  static mostPopular;

  //calls the backend to get user information based on userID
  static async setUser(userId) {
    try {
      const response = await fetch(`${this.url}/api/User/${userId}`);
      const userObj = await response.json();
      if (userObj.id) {
        this.user = userObj;
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  //use username and password to call to backend and set user object
  static async loginUser(username, password) {
    try {
      const response = await fetch(`${this.url}/login/${username}/${password}`);
      const userObj = await response.json();
      console.log(userObj.id);
      if (userObj.id) {
        localStorage.setItem("user", userObj.id);
        this.user = userObj;
        return userObj;
      }
    } catch (error) {
      console.log("error", error);
    }
    let invalidUser = {
      id: -1,
      name: "",
      password: "",
      email: "",
      avatarId: 0,
      privacySetting: 0,
      spendablePoints: 0,
      giftablePoints: 0,
      totalPoints: 0,
      lastLoginTime: "2022-03-02T20:57:01.805Z",
    };
    //if the user doesn't work, return the invalid user
    return invalidUser;
  }

  //Creates a new user based on the new information
  static async registerUser(username, password, email) {
    try {
      const response = await fetch(
        `${this.url}/register/${username}/${password}/${email}/${username}`
      );
      const userObj = await response.json();
      console.log(userObj.id);
      if (userObj.id) {
        localStorage.setItem("user", userObj.id);
        return userObj;
      }
    } catch (error) {
      console.log("error", error);
    }
    return;
  }

  //calls the static user so we don't need to make a call to the backend all the time for user data
  static getUser() {
    return this.user;
  }

  static getURL() {
    return this.url;
  }

  //Used to convert blockID from backend to names
  static blockIDToName(blockID) {
    let blockName = "";
    switch (blockID) {
      case 0:
        blockName = "basic city";
        break;
      case 1:
        blockName = "beach";
        break;
      case 2:
        blockName = "bear";
        break;
      case 3:
        blockName = "bridge";
        break;
      case 4:
        blockName = "broken bridge";
        break;
      case 5:
        blockName = "camel";
        break;
      case 6:
        blockName = "city";
        break;
      case 7:
        blockName = "cornfield";
        break;
      case 8:
        blockName = "desert path";
        break;
      case 9:
        blockName = "dock";
        break;
      case 10:
        blockName = "elephants";
        break;
      case 11:
        blockName = "fall path";
        break;
      case 12:
        blockName = "flamingo";
        break;
      case 13:
        blockName = "giraffe";
        break;
      case 14:
        blockName = "graveyard";
        break;
      case 15:
        blockName = "home";
        break;
      case 16:
        blockName = "ice path";
        break;
      case 17:
        blockName = "island hut";
        break;
      case 18:
        blockName = "jetskis";
        break;
      case 19:
        blockName = "lion";
        break;
      case 20:
        blockName = "lumberjack";
        break;
      case 21:
        blockName = "oasis";
        break;
      case 22:
        blockName = "panda";
        break;
      case 23:
        blockName = "peacock";
        break;
      case 24:
        blockName = "pepper patch";
        break;
      case 25:
        blockName = "pig";
        break;
      case 26:
        blockName = "polar bear";
        break;
      case 27:
        blockName = "pumpkin patch";
        break;
      case 28:
        blockName = "reindeer";
        break;
      case 29:
        blockName = "tiger";
        break;
      case 30:
        blockName = "tomato field";
        break;
      case 31:
        blockName = "totoro";
        break;
      case 32:
        blockName = "train";
        break;
      case 33:
        blockName = "winter camping";
        break;
      case 34:
        blockName = "winter river";
        break;
      case 35:
        blockName = "zebra";
        break;

      default:
        blockName = "";
        break;
    }
    return blockName;
  }

  //Used to convert blockName back to ID for backend
  static blockNameToID(blockName) {
    let blockID = -1;
    switch (blockName) {
      case "basic city":
        blockID = 0;
        break;
      case "beach":
        blockID = 1;
        break;
      case "bear":
        blockID = 2;
        break;
      case "bridge":
        blockID = 3;
        break;
      case "broken bridge":
        blockID = 4;
        break;
      case "camel":
        blockID = 5;
        break;
      case "city":
        blockID = 6;
        break;
      case "cornfield":
        blockID = 7;
        break;
      case "desert path":
        blockID = 8;
        break;
      case "dock":
        blockID = 9;
        break;
      case "elephants":
        blockID = 10;
        break;
      case "fall path":
        blockID = 11;
        break;
      case "flamingo":
        blockID = 12;
        break;
      case "giraffe":
        blockID = 13;
        break;
      case "graveyard":
        blockID = 14;
        break;
      case "home":
        blockID = 15;
        break;
      case "ice path":
        blockID = 16;
        break;
      case "island hut":
        blockID = 17;
        break;
      case "jetskis":
        blockID = 18;
        break;
      case "lion":
        blockID = 19;
        break;
      case "lumberjack":
        blockID = 20;
        break;
      case "oasis":
        blockID = 21;
        break;
      case "panda":
        blockID = 22;
        break;
      case "peacock":
        blockID = 23;
        break;
      case "pepper patch":
        blockID = 24;
        break;
      case "pig":
        blockID = 25;
        break;
      case "polar bear":
        blockID = 26;
        break;
      case "pumpkin patch":
        blockID = 27;
        break;
      case "reindeer":
        blockID = 28;
        break;
      case "tiger":
        blockID = 29;
        break;
      case "tomato field":
        blockID = 30;
        break;
      case "totoro":
        blockID = 31;
        break;
      case "train":
        blockID = 32;
        break;
      case "winter camping":
        blockID = 33;
        break;
      case "winter river":
        blockID = 34;
        break;
      case "zebra":
        blockID = 35;
        break;

      default:
        blockID = -1;
        break;
    }
    return blockID;
  }

  //used to convert avatarID to name
  static avatarIDToName(avatarID) {
    let avatarName = "";

    switch (avatarID) {
      case 0:
        avatarName = "boat";
        break;
      case 1:
        avatarName = "cactus";
        break;
      case 2:
        avatarName = "cherry";
        break;
      case 3:
        avatarName = "clownfish";
        break;
      case 4:
        avatarName = "cocoa";
        break;
      case 5:
        avatarName = "cookie";
        break;
      case 6:
        avatarName = "moon";
        break;
      case 7:
        avatarName = "music note";
        break;
      case 8:
        avatarName = "rainbow";
        break;
      case 9:
        avatarName = "sun";
        break;
      case 10:
        avatarName = "sushi";
        break;
      case 11:
        avatarName = "watermelon";
        break;

      default:
        avatarName = "";
        break;
    }
    return avatarName;
  }

  //used to convert avatar name to ID
  static avatarNameToID(avatarName) {
    let avatarID = -1;
    switch (avatarName) {
      case "boat":
        avatarID = 0;
        break;
      case "cactus":
        avatarID = 1;
        break;
      case "cherry":
        avatarID = 2;
        break;
      case "clownfish":
        avatarID = 3;
        break;
      case "cocoa":
        avatarID = 4;
        break;
      case "cookie":
        avatarID = 5;
        break;
      case "moon":
        avatarID = 6;
        break;
      case "music note":
        avatarID = 7;
        break;
      case "rainbow":
        avatarID = 8;
        break;
      case "sun":
        avatarID = 9;
        break;
      case "sushi":
        avatarID = 10;
        break;
      case "watermelon":
        avatarID = 11;
        break;

      default:
        avatarID = -1;
        break;
    }
    return avatarID;
  }

  //turn privacySetting from backend into booleans for frontend
  static interpretPrivacySetting(privacyInt) {
    //0: both false, 1: public can see points, 2: public can see purchases, 3: both settings are true
    let privacySettings = {
      publicCanSeePoints: false,
      publicCanSeePurchases: false,
    };

    switch (privacyInt) {
      case 0:
        //no changes
        break;
      case 1:
        privacySettings.publicCanSeePoints = true;
        break;
      case 2:
        privacySettings.publicCanSeePurchases = true;
        break;
      case 3:
        privacySettings.publicCanSeePoints = true;
        privacySettings.publicCanSeePurchases = true;
        break;

      default:
        break;
    }

    return privacySettings;
  }

  //turn privacy booleans from frontend into an int for backend
  static recordPrivacySetting(publicCanSeePoints, publicCanSeePurchases) {
    //just the reverse of the above option
    let privacyInt = 0;

    if (publicCanSeePoints) {
      privacyInt = privacyInt + 1;
    }
    if (publicCanSeePurchases) {
      privacyInt = privacyInt + 2;
    }

    return privacyInt;
  }

  //Store Functions

  //update bought list based off of block's name
  static async purchaseBlock(blockName, purchaseAmount) {
    //convert blockName to ID
    let blockID = this.blockNameToID(blockName);

    //call backend
    try {
      const response = await fetch(
        `${this.url}/api/Purchase/${this.user.id}/${blockID}/${purchaseAmount}`
      );
      const data = await response.json();
      if (data) {
        console.log(data);
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  //returns the most popular items in the store
  static async getMostPopular() {
    try {
      const response = await fetch(`${this.url}/getTopPurchases`);
      const data = await response.json();
      if (data) {
        return data;
      }
    } catch (error) {
      console.log("error", error);
    }
    return;
  }

  //Profile functions

  //updates the backend with the user's new avatar
  static async updateAvatarID(avatarName) {
    let currentUser = this.getUser();

    //change avatar name to id
    let avatarID = this.avatarNameToID(avatarName);

    //call backend to update Avatar ID
    //still a lil confused how to use post

    try {
      const response = await fetch(
        `${this.url}/avatar/${currentUser.id}/${avatarID}`
      );
    } catch (error) {
      console.log("error", error);
    }
  }

  //calls backend for privacySetting int
  static async getPrivacySetting() {
    let currentUser = this.getUser();
    //make the call to backend

    try {
      const response = await fetch(`${this.url}/getPrivacy/${currentUser.id}`);
      const privacySetting = await response.json();
      //turn privacySetting into booleans
      let privacyBooleans = this.interpretPrivacySetting(privacySetting);
      //return value
      return privacyBooleans;
    } catch (error) {
      console.log("error", error);
    }
  }

  //updates backend with new data
  static async updatePrivacySetting(publicCanSeePoints, publicCanSeePurchases) {
    let currentUser = this.getUser();

    //interpret into int
    let privacyInt = this.recordPrivacySetting(
      publicCanSeePoints,
      publicCanSeePurchases
    );
    //call to backend
    try {
      const response = await fetch(
        `${this.url}/privacyUpdate/${currentUser.id}/${privacyInt}`
      );
    } catch (error) {
      console.log("error", error);
    }
  }

  //get an array of trophies the user has bought
  static async getTrophies() {
    try {
      const response = await fetch(
        `${this.url}/api/Purchase/purchasedList/${this.user.id}`
      );
      const data = await response.json();
      if (data) {
        return data;
      }
    } catch (error) {
      console.log("error", error);
    }
    return;
  }

  //Messages functions

  //get list of all users currentUser has messaged
  static async getMessageList(userId) {
    try {
      const response = await fetch(
        `${this.url}/api/Message/usersMessaged/${this.user.id}`
      );
      const data = await response.json();
      if (data) {
        return data;
      }
    } catch (error) {
      console.log("error", error);
    }
    return;
  }

  //get all messages between currentUser and otherUsername
  static async getConversation(otherUsername) {
    try {
      const response = await fetch(
        `${this.url}/api/Message/messagesBetween/${this.user.id}/${otherUsername}`
      );
      const data = await response.json();
      if (data) {
        return data;
      }
    } catch (error) {
      console.log("error", error);
    }
    return;
  }

  //updates backend with message between currentUser and other user
  static async sendMessage(otherUsername, content) {
    try {
      const response = await fetch(
        `${this.url}/api/Message/${this.user.id}/${otherUsername}/${content}`
      );
      const data = await response.json();
    } catch (error) {
      console.log("error", error);
    }
  }

  //check if the other username searched is in the backend database. If so, return that info
  static async doesUserExist(otherUsername) {
    try {
      const response = await fetch(
        `${this.url}/api/User/usernameExists/${otherUsername}`
      );
      const data = await response.json();
      if (data) {
        return data;
      }
    } catch (error) {
      console.log("error", error);
    }
    return;
  }

  static async doesUserExist(otherUsername) {
    try {
      const response = await fetch(
        `${this.url}/api/User/usernameExists/${otherUsername}`
      );
      const data = await response.json();
      if (data) {
        return data;
      }
    } catch (error) {
      console.log("error", error);
    }
    return;
  }

  //returns the highest ranked users
  static async getLeaderboard() {
    try {
      const response = await fetch(
        `${this.url}/getLeaderboard/${this.user.id}`
      );
      const data = await response.json();
      if (data) {
        return data;
      }
    } catch (error) {
      console.log("error", error);
    }
    return;
  }

  static async getMostPopular() {
    try {
      const response = await fetch(`${this.url}/getTopPurchases`);
      const data = await response.json();
      if (data) {
        this.mostPopular = data;
        return data;
      }
    } catch (error) {
      console.log("error", error);
    }
    return;
  }

  static async getOtherUserByName(otherid) {
    try {
      const response = await fetch(
        `${this.url}/GetUserFromUsername/${otherid}`
      );
      const data = await response.json();
      if (data) {
        this.mostPopular = data;
        return data;
      }
    } catch (error) {
      console.log("error", error);
    }
    return;
  }
}

export default DataFunctions;
