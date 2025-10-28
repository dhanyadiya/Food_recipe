import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/home/home";
import Getrecipe from "./components/getrecipe/getrecipe";
import Meal from "./components/meal/meal";
import Recipeinstruction from "./components/recipeinstruction/recipeinstruction";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
<Header/>
 <Router>
     <Routes>
<Route path="/" element={<Home />} />
        <Route path="/getrecipe" element={<Getrecipe />} />
        <Route path="/meal" element={<Meal />} />
        <Route path="/recipeinstruction/:id" element={<Recipeinstruction />} />
</Routes>
 </Router>

    </div>
  );
}

export default App;
