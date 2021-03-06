const util = {
  verifyObject: (model, objeto) => {
    const chavesModel = Object.keys(model);
    const chavesObjeto = Object.keys(objeto);
    const result = chavesObjeto.filter((x) => !chavesModel.includes(x));
    result.forEach((x) => delete objeto[x]);
    return objeto;
  },

  preRequestPUT: (objeto) => {
    delete objeto.confirmar_senha;
    delete objeto.confirmar_email;
    if (objeto.senha === undefined || objeto.senha === "") {
      delete objeto.senha;
    }
    if (objeto.email === undefined || objeto.email === "") {
      delete objeto.email;
    }
    //console.log(objeto);
    return objeto;
  },

  editModel: (objeto) => {
    delete objeto.senha;
    delete objeto.confirmar_senha;
    delete objeto.confirmar_email;
    return objeto;
  },

  isEmpty: (objeto) => {
    var count = 0;
    for (var element in objeto) {
      objeto[element] === "" && (count = count + 1);
    }
    return count;
  },
};
export default util;
