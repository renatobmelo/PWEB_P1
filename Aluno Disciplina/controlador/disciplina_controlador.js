class DisciplinaControlador {

    constructor() {
        this.servicoD = new DisciplinaService();        
        this.servicoA = new AlunoService();          
    }

    inserir() {
        const nomeDisc = document.querySelector("#nomeDisciplina");
        const codigoDisc = document.querySelector("#codigoDisciplina");
        const discInserido = this.servicoD.inserir(nomeDisc.value, Number(codigoDisc.value));
        const listaDiscElemento = document.querySelector("#lista");
        if (discInserido) {
            this.inserirDiscNoHtml(discInserido, listaDiscElemento);
        }
    }

    inserirDiscNoHtml(disciplina, elementoDestino) {
        const discElemento = document.createElement("li");
        discElemento.textContent = `Nome da Disciplina: ${disciplina.nome} - Código: ${disciplina.codigo}`;
        elementoDestino.appendChild(discElemento);
    }


}