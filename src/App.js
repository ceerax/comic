
import './App.scss';
import HEADER from './components/header/header';
import MAIN from './components/main/main'

import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <HEADER/>
        <MAIN/>
      
      </header>
    </div>
  );
}

export default App;
