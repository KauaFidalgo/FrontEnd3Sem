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

//Reduz o array a um unico elemento. No caso um somatorio, por exemplo:

let totCamisetasEmEstoque = estoque.reduce((t, p) => {
    return t + p.quantidade;
}, 0);

console.log(`Total de camisetas em estoque: ${totCamisetasEmEstoque}`);