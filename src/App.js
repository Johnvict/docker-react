import logo from './logo.svg';
import './App.css';

function App() {
  const getData = () => {
    fetch('https://')
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>We are already here now</p>
        <p>And our new app is ready on AWS CICD</p>
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
