import Card from "./Card.jsx";

function App() {
  return (
    <div className="app">
      <h1>Like Cards</h1>
      <div className="row">
        <Card title="React Basics" />
        <Card title="JavaScript Tips" />
        <Card title="CSS Tricks" />
      </div>
    </div>
  );
}
export default App;
