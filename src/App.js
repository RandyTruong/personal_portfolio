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

const {
  name,
  occupation,
  address,
  description,
  social,
  image,
  bio,
  phone,
  email,
  resumedownload,
} = aboutData;
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
      <About
        name={name}
        image={image}
        bio={bio}
        state={state}
        street={street}
        zip={zip}
        city={city}
        phone={phone}
        email={email}
        resumeDownload={resumedownload}
      />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
