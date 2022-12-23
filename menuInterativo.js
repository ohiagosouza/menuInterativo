let options = "5";

do {
  options = prompt(
    "Olá, seja bem-vindo(a)! Escolha a opção desejada\n\n1) Suporte Técnico\n2) Setor financeiro\n3) Comercial\n4) Constratos\n5) Sair"
  );
  switch (options) {
    case "1":
      alert("Você escolheu a opção Suporte Técnico");
      break;

    case "2":
      alert("Você escolheu a opção Setor Financeiro");
      break;

    case "3":
      alert("Você escolheu a opção Comercial");
      break;

    case "4":
      alert("Você escolheu a opção Contratos");
      break;

    case "5":
      alert("Você escolheu a opção Sair");
      break;
    default:
      alert("A opção escolhida é inválida");
  }
} while (options !== "5");
