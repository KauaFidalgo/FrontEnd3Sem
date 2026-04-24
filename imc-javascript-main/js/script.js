    function calcular() {
    const nome = document.getElementById("nome").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);


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

    const objetoIMC = {
        nome: nome,
        altura: altura,
        peso: peso,
        imc: imc,
        textoIMC: textoIMC
    }

    //chamar a função para cadastrar o contato na API, passando o objetoIMC como parâmetro
    const retorno = cadastrarContato(objetoIMC);

    if(retorno) {

        const linhaTabela =
        `<tr>
            <td>${nome}</td>
            <td>${altura}</td>
            <td>${peso}</td>
            <td>${imc.toFixed(2)}</td>
            <td>${textoIMC}</td>
        </tr>`;

        document.getElementById("cadastro").innerHTML += linhaTabela;

        //limpar os campos do formulário
        document.getElementById("nome").value = "";
        document.getElementById("altura").value = "";
        document.getElementById("peso").value = "";

        alert(`${nome} foi cadastrado no banco:
                Nome: ${nome}
                IMC: ${imc.toFixed(2)}
                Classificação: ${textoIMC}
            `);

    } else {
        alert("Erro ao cadastrar o contato.");
    }
}//fim da função calcular

    async function cadastrarContato(objetoIMC) {
    //cadastrar na API
    
    try {
        let resposta = await fetch("http://localhost:3000/imc", {
            method: "POST",
            body: JSON.stringify(objetoIMC),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        });

        return true;
    } catch (error) {

        console.log(error);
        return false;
    }
}



    //Recebe a altura e o peso, e retorna o valor do IMC
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



    //fazer um get 
    //rodar um for com a lista que o get retornou
    //inserir as linhas da tabela com os dados no html

    async function buscarIMCs() {

        try {
            const retorno = await fetch("http://localhost:3000/imc");
            const dadosRetornados = await retorno.json();

            console.log(dadosRetornados);//dados do cadastro

            const tabela = document.getElementById("cadastro");
            let template = "";//variável para armazenar as linhas da tabela

        for(let i = 0; i < dadosRetornados.length; i++) {
            template +=
            `<tr>
                <td>${dadosRetornados[i].nome}</td>
                <td>${dadosRetornados[i].altura}</td>
                <td>${dadosRetornados[i].peso}</td>
                <td>${dadosRetornados[i].imc.toFixed(2)}</td>
                <td>${dadosRetornados[i].textoIMC}</td>
            </tr>`;
            }

            tabela.innerHTML = template; // so aciono o html uma vez, aqui
            
        } catch (error) {
            console.log(error);
        }

    }