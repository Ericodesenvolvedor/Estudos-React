import { useState } from "react";
import Saudacao from "./Components/Saudacao";
import SeuNome from "./Components/SeuNome";

function App() {

  const [seuNome, setSeuNome] = useState();

  return (
    <div className="App">
        <h1>State Lift</h1>
        <SeuNome setNome={setSeuNome}/>
        <Saudacao seuNome={seuNome}/>
    </div>
  );
}

export default App;
