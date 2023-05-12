export class DataFunctions {
  static user;
  static url = "https://466app.azurewebsites.net";
  //static url = "https://localhost:7207";
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

  static async getUserFromId(userId) {
    try {
      const response = await fetch(`${this.url}/api/User/${userId}`);
      const userObj = await response.json();
      if (userObj.id) {
        return userObj;
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
      lastLoginTime: "2023-03-02T20:57:01.805Z",
    };
    //if the user doesn't work, return the invalid user
    return invalidUser;
  }

  //Creates a new user based on the new information
  static async registerUser(username, password, email) {
    try {
      var random_name = "Curious Tiger"
      const response = await fetch(
        `${this.url}/register/${username}/${password}/${email}/${random_name}`
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

  static async updateName(name) {
    try {
      const response = await fetch(
        `${this.url}/api/User/updateName/${this.user.id}/${name}`
      );
      const userObj = await response.json();
      console.log(userObj.id);
      if (userObj.id) {
        this.user = userObj;
        return userObj;
      }
    } catch (error) {
      console.log("error", error);
    }
    return;
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

  //Profile functions

  //updates the backend with the user's new avatar
  static async updateAvatarID(avatarName) {
    let currentUser = this.getUser();

    //change avatar name to id
    let avatarID = this.avatarNameToID(avatarName);

    currentUser.avatarId = avatarID;

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

  //Messages functions

  //get list of all users currentUser has messaged
  static async getMessageList(userId) {
    try {
      const response = await fetch(
        `${this.url}/api/Message/usersMessaged/${this.user.id}`
      );
      const data = await response.json();

    //  const data = [
    //     {username: "test1", lastMessage: "hello", avatarId: 0, id: 1},
    //     {username: "test2", lastMessage: "hello", avatarId: 1, id: 2},
    //     {username: "test3", lastMessage: "hello", avatarId: 2, id: 3},
    //     {username: "test4", lastMessage: "hello", avatarId: 3, id: 4},
    //   ]
      if (data) {
        return data;
      }
    } catch (error) {
      console.log("error", error);
    }
    return;
  }

  static async getRandomUser() {
    try {
      const response = await fetch(
        `${this.url}/api/User/randomUser/`
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

  //global message functions
  static async getGlobalMessages() {
    try {
      const response = await fetch(`${this.url}/Message/globalMessages`);
      const data = await response.json();
      if (data) {
        return data;
      }
    } catch (error) {
      console.log("error", error);
    }
    return;
  }

  static async sendGlobalMessage(content, userId) {
    try {
      const response = await fetch(
        `${this.url}/Message/globalMessage/${this.user.id}/${content}`
      );
      const data = await response.json();
    } catch (error) {
      console.log("error", error);
    }
  }
}

export default DataFunctions;
