class Auth {
  static register = (userData) => {
    if (localStorage.hasOwnProperty("usersDB")) {
      let userDB = JSON.parse(localStorage.getItem("usersDB"));
      let existUser = userDB.some((el) => {
        return el.email === userData.email;
      });
      if (existUser) {
        console.log("User postoji");
        return false;
      } else {
        userDB.push(userData);
        localStorage.setItem("usersDB", JSON.stringify(userDB));
        return true;
      }
    } else {
      let newUser = [userData];
      localStorage.setItem("usersDB", JSON.stringify(newUser));
      return true;
    }
  };

  static login = (userData) => {
    if (localStorage.hasOwnProperty("usersDB")) {
      let userDB = JSON.parse(localStorage.getItem("usersDB"));
      let existUser = userDB.find((el) => {
        return el.email === userData.email && el.password === userData.password;
      });

      if (existUser.email) {
        return existUser;
      }
    }
    return false;
  };
}

export default Auth;
