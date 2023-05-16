import logo from './images/logo.svg';
import './App.css';
import { Main } from './components/Main/Main';
import { ContactButtons } from './components/ContactButtons/ContactButtons';

function App() {
  return (
    <div className="App">
    <Main />
    <ContactButtons />
    </div>
  );
}

export default App;
