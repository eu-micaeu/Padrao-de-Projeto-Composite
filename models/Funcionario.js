const ComponenteFuncionario = require("./ComponenteFuncionario");

class Funcionario extends ComponenteFuncionario {

  constructor(nome, salario) {

    super();

    this.nome = nome;

    this.salario = salario;

  }

  obterSalario() {

    return this.salario;

  }

  mostrarDetalhes(indent = 0) {

    console.log("  ".repeat(indent) + `Funcionário: ${this.nome}, Salário: ${this.salario}`);

  }

}

module.exports = Funcionario;
