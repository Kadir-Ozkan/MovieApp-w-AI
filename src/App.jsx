import Router from "./router/Router";
import './App.css';

function App() {
  return (
    <RecipeProvider>
      <Router />
    </RecipeProvider>
  );
}

export default App;
