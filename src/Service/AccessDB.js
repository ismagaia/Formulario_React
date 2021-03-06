import axios from "axios";

const AccessDB = {
  findUserLogin: (idFirebase) => {
    return new Promise((resolve, reject) => {
      axios
        .post("http://localhost:5000/login", { id_firebase: idFirebase })
        .then((res) => {
          resolve(res.data);
        })
        .catch((erro) => {
          console.log(erro);
          reject(false);
        });
    });
  },

  findUser: (token) => {
    return new Promise((resolve, reject) => {
      axios
        .get("http://localhost:5000/cadastro", {
          headers: { authenticate: token },
        })
        .then((res) => {
          console.log(res);
          resolve(res.data);
        })
        .catch((erro) => {
          console.log(erro);
          reject(erro);
        });
    });
  },

  postUser: (user) => {
    return new Promise((resolve, reject) => {
      axios
        .post("http://localhost:5000/cadastro", user)
        .then((res) => {
          resolve(true);
        })
        .catch((erro) => {
          console.log(erro);
          reject(erro);
        });
    })
  },

  putUser: (token, newValue) => {
    return new Promise((resolve, reject) => {
      axios
        .put("http://localhost:5000/cadastro", newValue, {
          headers: { authenticate: token },
        })
        .then((res) => {
          resolve(true);
        })
        .catch((erro) => {
          console.log(erro);
          reject(erro);
        });
    });
  },

  deleteUser: (token, _id) => {
    return new Promise((resolve, reject) => {
      axios
        .delete("http://localhost:5000/cadastro", {
          params: { _id },
          headers: { authenticate: token },
        })
        .then((res) => {
          resolve(true);
        })
        .catch((erro) => {
          console.log(erro);
          reject(erro);
        });
    });
  },
};

export default AccessDB;
