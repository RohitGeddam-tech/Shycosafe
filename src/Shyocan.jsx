// import logo from './images/logo.png';
import './App.scss';
import loadable from "@loadable/component";
const About = loadable(() => import("./Components/About"));
const Collection = loadable(() => import("./Components/Collection"));
const Features = loadable(() => import("./Components/Features"));
const News = loadable(() => import("./Components/News"));
const Test = loadable(() => import("./Components/Test"));
const Footer = loadable(() => import("./layout/Footer"));
const NewHeader = loadable(() => import("./layout/NewHeader"));
// import About from './Components/About';
// import Collection from './Components/Collection';
// import Features from './Components/Features';
// import News from './Components/News';
// import Test from './Components/Test';
// import Footer from './layout/Footer';
// import NewHeader from './layout/NewHeader';

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
