// O fragment é um tag vázia

function Fragmento() {
    return(
        <>
            <div>
                <h1>Fragmento</h1>
                <p>Um padrão comum no React é que um componente pode retornar múltiplos elementos. Os Fragmentos permitem agrupar uma lista de filhos sem adicionar nós extras ao DOM.</p>
            </div>

            <div>
                <h2>Sintaxe curta</h2>
                <p>Existe uma sintaxe nova e mais curta que você pode usar para declarar fragmentos. Parecem tags vazias</p>
            </div>
        </>
    )
}

export default Fragmento;