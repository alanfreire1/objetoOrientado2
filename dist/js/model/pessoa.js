export class Pessoa {
    // Atributos 
    _nome;
    _cpf;
    _idade;
    _sexo;
    // construtor
    constructor(nome, cpf, idade, sexo) {
        this._nome = nome;
        this._cpf = cpf;
        this._idade = idade;
        this._sexo = sexo;
    }
    // Métodos
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        const nomeValido = nome.trim().length >= 2;
        if (!nomeValido) {
            this._nome = nome.toUpperCase().trim();
        }
        throw new Error("Nome Inválido");
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(cpf) {
        this._cpf = cpf;
    }
    get idade() {
        return this._idade;
    }
    set idade(idade) {
        this._idade = idade;
    }
    get sexo() {
        return this._sexo;
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }
}
