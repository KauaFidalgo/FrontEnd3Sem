const hobbies = [
    "Ler",
    "Viajar",
    "Cozinhar",
    "Fotografar"
];

//Array map é um metodo da classe array que itera sobre o array retornando um novo array.

const novosHobbies = hobbies.map((hobby) => {
    return `<p> ${hobby} </p>`;
});

console.log(novosHobbies);
