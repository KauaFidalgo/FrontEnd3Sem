let frutasCitricas = ["Limão", "Laranja", "Grapefruit"];

// shift() remove o primeiro elemento do array
//const frutaRemovida = frutasCitricas.shift();

console.log(`Frutas cítricas: ${frutasCitricas}`);
console.log(frutasCitricas[0]); //acesso ao primeiro elemento do array
console.log(frutasCitricas[1]); //acesso ao segundo elemento do array
console.log(frutasCitricas[2]); //acesso ao terceiro elemento do array

//remove o limao
let frutaRemovida = frutasCitricas.shift(); //remove o primeiro elemento do array
console.log(`Frutas cítricas após remoção: ${frutasCitricas}`);
console.log(`Fruta removida: ${frutaRemovida}`);

console.log(frutasCitricas[0]); //acesso ao primeiro elemento do array
console.log(frutasCitricas[1]); //acesso ao segundo elemento do array
console.log(frutasCitricas[2]); //acesso ao terceiro elemento do array