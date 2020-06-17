import React from 'react';
import { BrowserRouter,Route,Switch} from 'react-router-dom'
// import  Home  from './components/home'
import ProductsPage from './components/productsPage';
// import Navbar from './components/navbar'
import Cart from './components/cart'
import checkoutPage from './components/checkoutPage';
import ThanksPage from './components/ThanksPage';
function App() {
  return (
   <BrowserRouter>
      <div className="App">
       
        <Switch>
        <Route exact path='/' component={ProductsPage}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/checkout' component={checkoutPage}/>
        <Route path='/ThanksPage' component={ThanksPage}/>
        </Switch>
      
    </div>
   </BrowserRouter>
  );
}

export default App;
