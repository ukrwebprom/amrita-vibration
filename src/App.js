import logo from './images/logo.svg';
import './App.css';
import { Main } from './components/Main/Main';
import { ContactButtons } from './components/ContactButtons/ContactButtons';
import { TextBlockOne } from './components/TextBlocks/TextBlockOne';

function App() {
  return (
    <div className="App">
    <Main />
    <ContactButtons />
    <TextBlockOne />
    </div>
  );
}

export default App;
