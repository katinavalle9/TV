import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import './App.css'
import RouterIndex from './routes/RouterIndex';
import Footer from './components/Footer/Footer';
 


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <RouterIndex/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App
