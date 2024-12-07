
import Navbar from './components/navbar/navbar';
import ContactForm from './components/home/home';
import Home from './components/home/home';
import Location from './components/location/location';
import Footer from './components/footer/footer';



const App =()=>{
  return(
   <div>
    <Navbar/>
    <ContactForm/>
    <Location/>
    <Footer/>
   </div>
  );
};
export default App;

