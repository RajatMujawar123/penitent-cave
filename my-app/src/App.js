
import './App.css';
import Newarrivals from './Components/newsrrivals';
import Home from "./Components/Home"
import  AllRouter  from './Components/Router';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';



function App() {
  return (
    <div  className="App">
    <Navbar />
    <AllRouter/>
    <Footer />  

    </div>
  );
}



export default App;
