import React from "react";
import "./styles/app.css";
import {
  About,
  Contact,
  Footer,
  Header,
  Portfolio,
  Resume,
  Testimonials,
} from "./components";

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
