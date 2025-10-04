import logo from './logo.svg';
import './App.css';
import WebController from './controller/WebController';

function App() {
  return (
    <div className="App">
      {/* <div className="mobile-warning">
        This website is recommended to be used on 100% scale desktop.
      </div> */}

      <WebController />
    </div>
  );
}

export default App;
