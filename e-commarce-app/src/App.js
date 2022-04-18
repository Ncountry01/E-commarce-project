import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import LogIn from './component/LogIn';
import SignUp from './component/Register';
import AddProductApp from './components/Add product';
import ProductApp from './components/Productlist';
import NavbarApp from './navbar/Navbar';
import HomeApp from './components/Home';
import Protected from './Protected';

function App() {

<NavbarApp />

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
   <Routes>
     <Route path='/' element= {<HomeApp />} />
     <Route path='/add' element ={<Protected cmp={AddProductApp} />} />
     <Route path='/product' element={<Protected cmp ={ProductApp} />} />
     <Route path='/login' element={<LogIn/>} />
     <Route path='/register'  element ={<SignUp />}/>
     <Route path='/*'  element={<PageApp />} />
   </Routes>
  
  
    </div>
  );
}

const PageApp =() => {
  return (<>
  <h2>Page Not Found...</h2>
  </>)
}

export default App;
