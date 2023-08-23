import { ContaPoupanca } from "./model/conta_poupanca.js";
import { Pessoa } from "./model/pessoa.js";
const Alan = new Pessoa("alan", "701.535.934-07", 20, "M");
const contaAlan = new ContaPoupanca(1001, 1, Alan);
contaAlan.depositar(1000);
window.alert(`saldo da conta: ${contaAlan.titular.nome}`);
window.alert(`saldo: ${contaAlan.saldo}`);
