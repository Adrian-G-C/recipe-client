import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Auth } from "./pages/auth";
import { CreateRecipe } from "./pages/create-recipe";
import { SavedRecipies } from "./pages/saved-recipies";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/saved-recipies" element={<SavedRecipies />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
