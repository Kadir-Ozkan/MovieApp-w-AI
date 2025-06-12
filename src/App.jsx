import Navbar from "./components/Navbar";
import Router from "./router/Router";

function App() {
  return (
    <RecipeProvider>
      <Navbar />
      <Router />
    </RecipeProvider>
  );
}

export default App;
