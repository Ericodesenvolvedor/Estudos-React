import Button from './Button'

function Evento() {

    function meuEvento() {
        console.log('Oi');
    }

    return(
        <div>
            <p>Click no botão para disparar um evento</p>
            <Button text="Primeiro evento" event={meuEvento}/>
        </div>
    )
}

export default Evento;