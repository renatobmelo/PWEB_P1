class AlunoService {
    constructor() {
        this.repositorioA = new AlunoRepositorio();
    }

    inserir(nome, idade, matricula) {
        if (idade < 18) {
            throw new Error('Aluno não pode ser menor de idade');}
        
        const alunoPesquisado = this.pesquisarPorMatricula(matricula);
        if (alunoPesquisado.length > 0) {
            throw new Error('Aluno já cadastrado!');}
        const alunoNovo = new Aluno(nome, idade, matricula);
        this.repositorioA.inserir(alunoNovo);
        return alunoNovo;
    }

    pesquisarPorMatricula(matricula) {
        return this.repositorioA.listar().filter(
            aluno => aluno.matricula === matricula);
    }

    remover(matricula) {
        this.repositorioA.remover(matricula);
    }

    listarMenoresIdade() {
        return this.repositorioA.listar().filter(aluno => aluno.idade < 18);
    }
}
