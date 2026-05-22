import "./CadastroGenero.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro"
import Lista from "../../components/lista/Lista"
import { useEffect, useState } from "react";
import api from "../../Services/services"

const CadastroGenero = (props) => {
    //variaveis e state 
    const [valor, setValor] = useState("")
    const [listaGeneros, setListaGeneros] = useState([])

    //funções e ciclos de vida
    const getGeneros = async () => {
        // chama a api
        try {
            const retornoAPI = await api.get("/generos")
            setListaGeneros(retornoAPI.data)
        } catch (error) {
            console.error("Erro ao buscar gêneros:", error)
        }
    }


    //ciclo de vida
    useEffect(() => {
        getGeneros()
    }, [])


    const cadastrarGenero = async (e) => {
        e.preventDefault()

        //Validar formulário
        if (valor.trim().length == 0) {
            alert("O campo gênero é obrigatório!")
            return false
        }
        const objCadastros = {
            nome: valor
        }
        //Chamar a API para cadastrar o gênero
        try {
            const retornoAPI = await api.post("/generos", objCadastros)
            alert("Gênero cadastrado com sucesso!")
            getGeneros()
            //limpar campo
            setValor("")
        } catch (error) {
            alert("Erro ao cadastrar gênero. Por favor, tente novamente.")
            console.log(error)

        }

        //listar os gêneros atualizados (chamar o getGeneros)
        await getGeneros()
    }

    const limparDados = () => {
        setValor("")
    }

    const excluirGenero = async (item) => {
        const confirmacao = window.confirm(`Tem certeza que deseja excluir o gênero "${item.nome}"?`)
        if (!confirmacao) {
            return 
        }
        try {
            const retornoAPI = await api.delete(`/generos/${item.id}`)
            alert("Gênero excluído com sucesso!")
            getGeneros()
        } catch (error) {
            alert("Erro ao excluir gênero. Por favor, tente novamente.")
            console.log(error)
        }
    }

    const editarGenero = (item) => {
        alert(`Função editar gênero em desenvolvimento`)
    }
    
    const CadastrarGenero2 = (e) => {
        e.preventDefault();

        alert("Função Cadastrar Gênero em desenvolvimento")
    }

    //o JSX em si (XML e HTML)
    return (
        <>
            <Header />
            <main>
            {/* Form de cadastro de Generos*/}
            
              <Cadastro
                    //Define o título que será exibido no formulário
                    tituloCadastro="Cadastro de Gênero"
                    // esconde o select de genero
                    visibilidade="none"
                    // Define o texto que aparece dentro do campo de input
                    placeholder="gênero"
                    // ----------------------------------------------------
                    // Propriedades voltada ao cadastro:

                    //Função que será chamada ao enviar o formulário (onSubmit)
                    funcCadastro={cadastrarGenero}
                    //Valor atual do campo de texto
                     valor={valor}
                    //Função que atualiza o estado do valor no componente pai sempre que o usuário digita no campo
                    setValor={setValor}
                />

                {/* Lista de Generos*/}
              <Lista
                    tituloLista="Lista de Gêneros"
                    visibilidade="none"

                    //Chama o método para validar:
                    lista={listaGeneros}
                    //Identifica o tipo de lista:
                    tipoLista="genero"

                    funcExcluir = {excluirGenero}
                    funcEditar = {editarGenero}
                />
            </main>
        <Footer />
        </>
        
    )
}

export default CadastroGenero

