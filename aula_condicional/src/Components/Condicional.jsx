import { useState } from "react";

function Condicional() {

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    const enviarEmail = (e) => {
        e.preventDefault();
        setUserEmail(email);
    }

    const limparEmail = () => {
        setUserEmail('');
    }
    
    return(
        <div>
            <h2>Cadastre seu e-mail</h2>
            <form>
                <input 
                    type="email" 
                    placeholder="Digite seu email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button 
                    type="submit" 
                    onClick={enviarEmail}
                >
                    Enviar email
                </button>

                {userEmail && (
                    <div>
                        <p>O email do usuario é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar email</button>
                    </div>
                )}
            </form> 
        </div>

    )
}

export default Condicional;