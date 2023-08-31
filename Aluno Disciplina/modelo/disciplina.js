class Disciplina {

    constructor(codigo, nome) {
        this._codigo = codigo;
        this._nome = nome;
        this._alunos = [];
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }
    
    get codigo() {
        return this._codigo;
    }

    set codigo(novocodigo) {
        this._codigo = novocodigo;
    }

    get alunos() {
        return this._alunos;
    }

    set alunos(alunos) {
        this._alunos = alunos;
    }

    adicionar (aluno) {
        this._alunos.push(aluno);
    }

    remover(matricula) {
        const alunoIndex = this._alunos.findIndex(aluno => aluno.matricula === matricula);
        if (alunoIndex !== -1) {
            this._alunos.splice(alunoIndex, 1);
        }
    }

    localizar (matricula) {
        this._alunos.forEach(aluno => {
            if (aluno.matricula === matricula) {
                return aluno}
            });
    }
}