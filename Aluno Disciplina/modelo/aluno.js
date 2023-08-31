class Aluno {

    constructor(nome, idade, matricula) {
        this._nome = nome;
        this.idade = idade;
        this.matricula = matricula;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    adicionar (aluno) {
        this._alunos.push(aluno);
    }

    localizar (nome) {
        this._alunos.forEach(aluno => {
            if (aluno.nome === nome) {
                return aluno
            }
        })}

}
