const hobbies = [
    "Ler",
    "Viajar",
    "Cozinhar",
    "Fotografar"
];

//vamos usar um array ou foreach com uma funcaozinha diferente
//uma tal de arrow function, que é uma funcao anonima, ou seja, nao tem nome e é definida no momento da chamada da funcao

hobbies.forEach((hobby) => {
    console.log(hobby);
});

