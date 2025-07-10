import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Home from "./pages/Home"
import { Router, Routes, Route } from "react-router-dom"
import SearchResult from './components/SearchResults'
import Recipe from './components/Recipe'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ListOfLetters from './components/ListLetters'
import FirstLetterRecipes from './components/FirstLetterRecipes'
import InputForm from './components/InputForm'
import RecipeByCategory from './components/RecipesByCategory'
import Flags from './components/Flags'
import RecipeByArea from "./components/RecipeByArea"
import Favorites from './components/Favorites'


function App() {
 

  return (
    <div className='app-container'>
  
   
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
    </div>
   
   
    

  )
}

export default App
