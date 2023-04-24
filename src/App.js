import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Cocktail } from "./components/Cocktails/Cocktail";
import { Favorites } from "./components/Favorites/Favorites";
import { Navbar } from "./components/Navbar/Navbar";
import { CocktailDetails } from "./components/Cocktails/CocktailDetails";
import { Home } from "./components/Home/Home";
import { ContactUs } from "./components/ContactUs/ContactUs";
import { Footer } from "./components/Footer/Footer";
import { Error } from "./components/Error/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cocktails" element={<Cocktail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cocktails/:id" element={<CocktailDetails />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
