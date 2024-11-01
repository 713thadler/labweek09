import './App.css';
import Greeting from './component/Greeting';
import Wish from './component/Wish';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="Adler" />
        <Wish adjectiv="Good" time="Morning"  />
     
      </header>
    </div>

  );
  

}


export default App;
