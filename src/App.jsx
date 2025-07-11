import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Home from "./pages/Home"
import Favorites from './pages/Favorites'
import { Router, Routes, Route } from "react-router-dom"
import SearchResult from './components/SearchResults'
import Recipe from './components/Recipe'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import FirstLetterRecipes from './components/FirstLetterRecipes'
import RecipeByCategory from './components/RecipesByCategory'
import RecipeByArea from "./components/RecipeByArea"
import { FavoritesProvier } from './context/FavoritesContext'

function App() {
 

  return (
    <div className='app-container'>
   <FavoritesProvier>
    <NavBar />
      <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/search' element={<SearchResult />}></Route>
          <Route path="/recipe" element={<Recipe />}></Route>
          <Route path="/searchFirstLetter" element={<FirstLetterRecipes />}></Route>
          <Route path='/category' element={<RecipeByCategory />}></Route>
          <Route path='/area' element={<RecipeByArea />}></Route>
          <Route path='/favorites' element={<Favorites />}></Route>
           
       </Routes> 
    <Footer />
    </FavoritesProvier>
    </div>
   
   
    

  )
}

export default App
