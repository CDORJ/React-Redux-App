import CardComponent from "./components/CardComponent";
import "./css/main.css";

function App() {
  return (
    <div className="card">
      <header>
        <h1>
          need<span>ADVICE</span>
        </h1>
      </header>
      <CardComponent />
    </div>
  );
}

export default App;
