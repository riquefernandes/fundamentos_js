//Minha tentativa: Não é possível trocar os valores de um valor para o outro simplesmente reatribuindo os atributos, pois reatribundo o resultado seria 97 nos dois

let a = 7
let b = 94

a = b
b = a

console.log(a)
console.log(b)


//Solução correta
{
    let a = 7;
    let b = 94

    let temp = a; // Aqui armazenamos temporariamente o valor de a
    a = b // Aqui o a foi reatribuida com o valor b = 94 (Lembre-se que variável pode ser atribuida a qualquer momento ou seja variar a qualquer momento)
    b = temp // aqui o primeiro valor temp está atribuida ao valor a = 7 
    console.log(a)
    console.log(b)
}

// Há uma alternativa mais simples e direta, é usar o colchete [a,b] = [b,a]