import { useState } from 'react'

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log(nome);
        console.log(password);
    }

    const [nome, setNome] = useState();
    const [password, setPassword] = useState();

    return(
        <form onSubmit={cadastrarUsuario}>
            <div>
                <label htmlFor="nome">Nome:</label>
                <input 
                    type="text" 
                    id="nome"
                    onChange={(e)=> setNome(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="password">Senha</label>
                <input 
                    type="password" 
                    id="password"
                    onChange={(e)=> setPassword(e.target.value)}
                />
            </div>

            <div>
                <input type="submit" value='Cadastrar'/>
            </div>
        </form>
    )
}

export default Form;