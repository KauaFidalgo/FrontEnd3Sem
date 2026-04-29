const hobbies = [
    "Ler",
    "Viajar",
    "Cozinhar",
    "Fotografar"
];

// hobbies.forEach(
//(hobby, index) => {                           //hobby é o elemento atual do array e index é a posição do elemento no array
//console.log(`Hobby ${index + 1}: ${hobby}`);  //index + 1 para começar a contagem a partir de 1
// });

hobbies.forEach(
    //funcao de callback: é uma funcao que é passada como argumento para outra funcao e é executada dentro da funcao que a recebe

    //funcao anonima: que nao tem nome e é definida no momento da chamada da funcao
    function (hobby){
        console.log(`Hobby: ${hobby}`);
    }

);

//funcao convercional no js
function teste(x, y){
    return x + y;
}