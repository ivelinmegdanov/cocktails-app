import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { Favorites } from "./components/Favorites";
import { Navbar } from "./components/Navbar";
import { CocktailDetails } from "./components/CocktailDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cocktails/:id" element={<CocktailDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
