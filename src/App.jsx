import "./App.css";
import Counter from "./components/Counter/Counter";
import Greeting from "./components/Greeting/Greeting";

function App() {
  return (
    <div>
      <h2>Excercice 1:</h2>
      <h3>Step 1</h3>
      <Counter step={1} />
      <h3>Step 2</h3>
      <Counter step={2} />
      <h3>Step 3</h3>
      <Counter step={3} />
      <h2>Excercice 2:</h2>
      <Greeting name="Euralio" />
    </div>
  );
}

export default App;
