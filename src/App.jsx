  // src/App.jsx
  import "./App.css";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <RecipeProvider>
      <div>Testing visibility</div>
      <AppRouter />
    </RecipeProvider>
  );
}

export default App;
