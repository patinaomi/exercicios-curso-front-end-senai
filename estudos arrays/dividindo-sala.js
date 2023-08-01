const alunos = ["Ana", "João", "Júlia", "Lara", "Mariana", "Gabriel", "Guilherme", "Camilo"];

//dividir um array
//tem que criar uma variável, esse método não faz alteração no array
 const sala1 = alunos.slice(0, alunos.length/2);
 const sala2 = alunos.slice(alunos.length/2);

console.log("Alunos da sala 1: " + sala1);
console.log("Alunos da sala 2: " + sala2);