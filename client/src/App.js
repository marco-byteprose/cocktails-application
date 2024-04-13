import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from 'src/pages/Home/Home';
import PageLayout from 'src/pages/PageLayout/PageLayout';
import CocktailDetails from 'src/pages/CocktailDetails/CocktailDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <PageLayout /> }>
            <Route index element={ <Home /> } />
            <Route path='cocktail/:id' element={ <CocktailDetails /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
