const ComponenteFuncionario = require("./ComponenteFuncionario");

class Departamento extends ComponenteFuncionario {

  constructor(nome) {

    super();

    this.nome = nome;

    this.subordinados = [];

  }

  adicionar(componenteFuncionario) {

    this.subordinados.push(componenteFuncionario);

  }

  remover(componenteFuncionario) {

    const indice = this.subordinados.indexOf(componenteFuncionario);

    if (indice > -1) {

      this.subordinados.splice(indice, 1);

    }

  }

  obterSalario() {

    return this.subordinados.reduce((total, funcionario) => total + funcionario.obterSalario(), 0);

  }

  mostrarDetalhes(indent = 0) {

    console.log("  ".repeat(indent) + `Departamento: ${this.nome}`);

    this.subordinados.forEach(funcionario => funcionario.mostrarDetalhes(indent + 1));

  }
  
}

module.exports = Departamento;
