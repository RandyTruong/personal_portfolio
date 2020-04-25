import React from 'react';
import styles from './styles/app.module.css'
import {About, Contact, Footer, Header, Portfolio, Resume, Testimonials} from './components'

function App() {
  return (
    <div className={styles.wrapper}>
      {/* <label className={styles.label}>something</label> */}
      <Header/>
      <About/>
      <Resume/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
