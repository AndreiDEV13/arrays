const alunos = ['Ana', 'Joaquim', 'Andrew', 'José'];
const medias = [7, 4.5, 10, 2];

const reprovados = alunos.filter((nome, indice) => {
    return medias[indice] < 7;
});

console.log(reprovados)