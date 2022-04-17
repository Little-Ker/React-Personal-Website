import logo from './logo.svg';
import './App.css';
import Nav from './component/nav/Nav'

function App() {
  return (
    <div className="App main-blue">
      <Nav name="VIVI" />
      <header className="App-header main-blue">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
