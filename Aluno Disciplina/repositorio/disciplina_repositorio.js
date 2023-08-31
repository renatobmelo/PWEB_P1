class DisciplinaRepositorio {

    constructor() {
        this.disciplinas = [];
    }

    inserir(disciplina) {
        this.disciplinas.push(disciplina);
    }

    remover(codigo) {
        const indxDisciplinaARemover = this.disciplinas.findIndex(disciplina => disciplina.codigo === codigo);
        if (indxDisciplinaARemover > -1) {
            this.disciplinas.splice(indxDisciplinaARemover, 1);
        }
    }

    listar() {
        return this.disciplinas;
    }

    listarAlunos(codigo) {
        const indxDisciplina = this.disciplinas.findIndex(disciplina => disciplina.codigo === codigo);
        if (indxDisciplina > -1) {
            return this.disciplinas[indxDisciplina].alunos;
        }
    }
    
    atualizar(codigo, nome) {
        const indxDisciplinaAlterar = this.disciplinas.findIndex(disciplina => disciplina.codigo === codigo);
        if (indxDisciplinaAlterar > -1) {
            this.disciplinas[indxDisciplinaAlterar].nome = nome;
        }
    }
}