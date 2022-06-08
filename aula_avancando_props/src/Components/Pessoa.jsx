import PropTypes from 'prop-types'

function Pessoa(props) {
    return (
        <>
            <h1>Olá {props.nome}, bem-vindo  ao seu curso de programação web</h1>
            <h2>Temas para serem abordados: </h2>
            <ol>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Bootstrap</li>
                <li>Javascript</li>
                <li>React</li>
            </ol>
        </>
    );
};

Pessoa.propTypes = {
    nome: PropTypes.string,
};

Pessoa.defaultProps = {
    nome: 'Anonimo'
};

export default Pessoa;