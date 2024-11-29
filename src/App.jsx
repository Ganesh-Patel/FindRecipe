import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import RecipeDetailsPage from './pages/RecipeDetailsPage';
import FavoritesPage from './pages/FavoritesPage';
import './App.css';
import Navbar from './components/Navbar';
import { RecipeProvider } from './RecipeContext'; // Import RecipeProvider
import Recipes from './pages/Recipes/Recipes';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <RecipeProvider> {/* Wrap the routes with RecipeProvider */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/recipe" element={<RecipeDetailsPage />} /> {/* Adjust this route if necessary */}
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
        <Footer />
      </Router>
    </RecipeProvider>
  );
}

export default App;
