import Cabecalho from "./components/Cabecalho";
import Showcase from "./components/Showcase";
import Services from "./components/Services";
import Working from "./components/Working";

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/global.css'

function App() {
  return (
    <div>
      <Cabecalho />
      <Showcase />
      <Services />
      <Working />
    </div>
  );
}

export default App;
