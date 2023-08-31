class DisciplinaService {
    
    constructor() {
        this.repositorioD = new DisciplinaRepositorio();
    }

    inserir(nome, codigo) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
        if (disciplinaPesquisada.length > 0) {
            throw new Error('Disciplina já cadastrada!');}
        const disciplinaNova = new Disciplina(codigo, nome);
        this.repositorioD.inserir(disciplinaNova);
        return disciplinaNova;
    }

    pesquisarPorCodigo(codigo) {
        return this.repositorioD.listar().filter(
            aluno => aluno.codigo === codigo);
    }

    remover(codigo) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
        if (disciplinaPesquisada.length > 0) {
            this.repositorioD.remover(codigo);
        } else {
            throw new Error('Disciplina não encontrada!')
        }
    }

    atualizar(codigo, novoNome) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
        if (disciplinaPesquisada.length > 0) {
            disciplinaPesquisada[0].nome = novoNome;
        } else {
            throw new Error('Disciplina não encontrada!')
        }
    }

    inserirAlunoNaDisciplina(aluno, codigo) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
        if (disciplinaPesquisada.length < 0) {
            throw new Error('Disciplica Não Encontrada!');}
        disciplinaPesquisada[0].adicionar(aluno);
    }

}