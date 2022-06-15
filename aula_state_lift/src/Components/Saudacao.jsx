function Saudacao ({seuNome}) {

    function gerarSaudacao(nomePessoa) {
        return `Olá, ${nomePessoa}`
    }

    return (
        <div>
            {seuNome && <p>{gerarSaudacao(seuNome)}</p>}
        </div>
    )
}

export default Saudacao;