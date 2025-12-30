import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Service from "./components/service";
import Tours from "./components/tours";
import Footer from "./components/footer";


function App() {
  console.log('hello')
  return (
      <>
    <Navbar/>
        <Hero/>
        <About/>
        <Service/>
        <Tours/>
        <Footer/>
  </>
  );
}

export default App;
