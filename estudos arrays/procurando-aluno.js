const alunos = ["João", "Juliana", "Ana", "Carla"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibir(aluno) {
    if(listaDeAlunosEMedias[0].includes(aluno)) {
        console.log(`${aluno} está cadastrado(a)!`);

        /*const alunos = listaDeAlunosEMedias[0];
        const medias = listaDeAlunosEMedias[1]; */

        const [alunos, medias] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno);
        const mediaAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaAluno}`);
    } else {
        console.log("Aluno não encontrado");
    }
}

exibir("Ana");