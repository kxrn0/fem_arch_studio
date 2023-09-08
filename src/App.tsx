import SCApp from "./App.styled";
import { Route, Switch, useLocation } from "wouter";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location[0]]);

  return (
    <SCApp>
      <Navbar />
      <Switch>
        <Route path="/fem_arch_studio/">
          <Home />
        </Route>
        <Route path="/fem_arch_studio/portfolio">
          <Portfolio />
        </Route>
        <Route path="/fem_arch_studio/about">
          <About />
        </Route>
        <Route path="/fem_arch_studio/contact">
          <Contact />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </SCApp>
  );
}

export default App;
