import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Formulaire from './formulaire/formulaire';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
             <Route path= '/' element={<Formulaire />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
