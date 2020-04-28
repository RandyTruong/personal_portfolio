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
import {
  name,
  occupation,
  address,
  description,
  social,
  bio,
  phone,
  email,
  resumedownload,
} from "./json/aboutData.json";
import resumeData from "./json/resumeData.json";
// import porfolioData from "./json/portfolioData.json";

const App = () => {
  return (
    <div className="App">
      <Header
        name={name}
        occupation={occupation}
        description={description}
        social={social}
        city={address.city}
      />
      <About
        name={name}
        bio={bio}
        phone={phone}
        email={email}
        resumeDownload={resumedownload}
        {...address}
      />
      <Resume {...resumeData}/>
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
