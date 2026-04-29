// Utilizado para filtrar um elemento dentro de um array. Retorna apenas o encontrado

const numeros = [1, 67, 10, 80];

const encontrado = numeros.filter((n) => {
    return n == 10;
});

//console.log(encontrado);

const estoque =[
    {
        descricao: "Camisa polo",
        cor: "Verde",
        perfil: "M",
        quantidade: 10
    },
    {
        descricao: "Camisa polo",
        cor: "Amarela",
        perfil: "F",
        quantidade: 15
    },
    {
        descricao: "Camisa polo",
        cor: "Azul",
        perfil: "M",
        quantidade: 30
    },
    {
        descricao: "Camisa polo",
        cor: "Roxa",
        perfil: "F",
        quantidade: 5
    }
];


const cFemininas = estoque.filter((c) => {
    return c.perfil == "F";
});

console.log(cFemininas);

console.log("Camisetas Femininas em estoque:");
console.log()

//utilizar o foreach e exibir os textos conforme o exemplo abaixo
    // amarela 10 unidades
    // roxa 10 unidades

cFemininas.forEach( (c) =>  {
    console.log(`${c.cor} : ${c.quantidade} unidade(s)`);
});