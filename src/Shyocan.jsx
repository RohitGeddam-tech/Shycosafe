// import logo from './images/logo.png';
import './App.scss';
import About from './Components/About';
import Collection from './Components/Collection';
import Features from './Components/Features';
import News from './Components/News';
import Test from './Components/Test';
import Footer from './layout/Footer';
import NewHeader from './layout/NewHeader';

function Shycocan() {
  return (
    <div className="App">
      {/* <MobileHeader /> */}
      <NewHeader />
      <div style={{paddingTop:'67px'}}>
        <About />
        <Features />
        <Collection />
        <News />
        <Test />
      </div>
      <Footer />
    </div>
  );
}

export default Shycocan;
