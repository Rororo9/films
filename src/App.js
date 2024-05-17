import logo from './logo.svg';
import './App.css';
import Stars from "./components/Stars";

const App = () => {
  let count = 2;

  return (
      <Stars count={count} />
  );
}

export default App;
