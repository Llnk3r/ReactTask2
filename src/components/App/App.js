import Hello from '../task2.1';
import Hi from '../task2.2';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hello />
      <Hi name="Artem"/>
      <Hi name="Anna"/>
      <Hi name="Oleg"/>
    </div>
  );
}

export default App;
