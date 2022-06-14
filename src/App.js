/*import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Intro from "./components/Intro";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Header/>
        <Switch>
          <Route exact path="/nchportfolio/" component={Intro}></Route>
          <Route exact path="/nchportfolio/About" component={About}></Route>
          <Route exact path="/nchportfolio/Projects" component={Projects}></Route>
          <Route exact path="/nchportfolio/Contact" component={Contact}></Route>
          <Route component={Intro}/>
        </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
*/

import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Intro from "./components/Intro";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path="/nchportfolio/welcome" element={Intro}></Route>
          <Route path="/nchportfolio/About" element={About}></Route>
          <Route path="/nchportfolio/Projects" element={Projects}></Route>
          <Route path="/nchportfolio/Contact" element={Contact}></Route>
          <Route element={Intro}/>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;



