    function calcular() {
    const nome = document.getElementById("nome").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    console.log(altura);
    console.log(peso);

    if(nome.trim().length == 0 || isNaN(altura) || isNaN(peso)) {
        alert("Preencha todos os campos corretamente.");
        return false;
    }

    const imc = calcularIMC(altura, peso);
    const textoIMC = gerarTextoIMC(imc);

    console.log(nome);
    console.log(altura);
    console.log(peso);
    console.log(imc);
    console.log(textoIMC);
}

    function calcularIMC(altura, peso) {
        return peso / (altura * altura);
    }

    function gerarTextoIMC(imc) {
        if(imc < 16.5) {
            return "Magreza grave";
        } else if(imc < 18.5) {
            return "Magreza leve";
        } else if(imc < 25) {
            return "Peso normal";
        } else if(imc < 30) {
            return "Sobrepeso";
        } else if(imc < 35) {
            return "Obesidade";
        }else if (imc < 38.5) {
            return "Obesidade grave";
        }
    }
    
