import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import { Container } from './styles';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (query) => {
    const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=20140955&app_key=a666ff8da7a03df2a6783c21b7572a96`);
    setRecipes(response.data.hits);
  };

  return (
    <Container>
      <Header />
      <SearchBar onSearch={fetchRecipes} />
      <RecipeList recipes={recipes} />
    </Container>
  );
};

export default App;
