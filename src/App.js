import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello</h1>
        <h2>Luke was here</h2>
        <h3>This is an Azure App Service website deployed as a Docker container using Azure Devops for CICD</h3>
        <h3>This has been redeployed from my Macbook</h3>
        <h4>GR8</h4>
        <h4>GR888888</h4>
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
