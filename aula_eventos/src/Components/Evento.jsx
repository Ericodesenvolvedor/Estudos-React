function Evento() {

    function meuEvento() {
        console.log('Oi');
    }

    return(
        <div>
            <p>Click no botão para disparar um evento</p>
            <button onClick={meuEvento}>Disparar!</button>
        </div>
    )
}

export default Evento;