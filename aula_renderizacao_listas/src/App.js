import OutraLista from "./Components/OutraLista";

function App() {

  const meusItens = ['React', 'Javascript', 'Bootstrap', 'Html', 'Css'];

  return (
    <div>
      <h2>Renderização de lista</h2>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>
    </div>
  )
}

export default App;