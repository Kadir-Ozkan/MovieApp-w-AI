import "./App.css";
import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <RecipeProvider>
      <Navbar />
      <AppRouter />
    </RecipeProvider>
  );
}

export default App;
