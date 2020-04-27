import React from "react";
import {
  About,
  Contact,
  Footer,
  Header,
  Portfolio,
  Resume,
  Testimonials,
} from "./components";
import resumeData from "./json/resumeData.json";
import aboutData from "./json/aboutData.json";
import porfolioData from "./json/portfolioData.json";

const { name, occupation, address, description, social } = aboutData;
const { state, street, city, zip } = address;

const App = () => {
  return (
    <div className="App">
      <Header
        name={name}
        occupation={occupation}
        city={city}
        description={description}
        social={social}
      />
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
