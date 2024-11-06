const Funcionario = require("./models/Funcionario");

const Departamento = require("./models/Departamento");

function main() {

  const func1 = new Funcionario("João", 5000);

  const func2 = new Funcionario("Maria", 6000);

  const func3 = new Funcionario("José", 5500);

  const func4 = new Funcionario("Ana", 6500);

  const departamentoDesenvolvimento = new Departamento("Desenvolvimento");

  departamentoDesenvolvimento.adicionar(func1);

  departamentoDesenvolvimento.adicionar(func2);

  const departamentoMarketing = new Departamento("Marketing");

  departamentoMarketing.adicionar(func3);

  departamentoMarketing.adicionar(func4);

  const departamentoGeral = new Departamento("Geral");

  departamentoGeral.adicionar(departamentoDesenvolvimento);

  departamentoGeral.adicionar(departamentoMarketing);

  console.log("Estrutura da organização:");

  departamentoGeral.mostrarDetalhes();

  const salarioTotal = departamentoGeral.obterSalario();

  console.log(`\nSalário total da organização: ${salarioTotal}`);

}

main();