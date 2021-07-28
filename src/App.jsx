// import logo from './images/logo.png';
import './App.scss';
import About from './Components/About';
import Banner from './Components/Banner3';
import Collection from './Components/Collection';
import Contact from './Components/Contact';
import Features from './Components/Features';
import News from './Components/News';
import Product from './Components/Product';
// import Specs from './Components/Specs';
import Test from './Components/Test';
import Footer from './layout/Footer';
// import MobileHeader from './layout/MobileHeader';
import NewHeader from './layout/NewHeader';

function App() {
  return (
    <div className="App">
      {/* <MobileHeader /> */}
      <NewHeader />
      <div style={{paddingTop:'67px'}}>
        <Banner />
        <About />
        <Features />
        <Collection />
        <News />
        {/* <Specs /> */}
        <Test />
        <Product />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
