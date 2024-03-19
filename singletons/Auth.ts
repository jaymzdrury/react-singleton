let instance: Auth;
let auth = false;

class Auth {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    instance! = this;
  }

  login() {
    return (auth = true);
  }

  logout() {
    return (auth = false);
  }

  isUser() {
    return auth;
  }
}

export const user = new Auth();
