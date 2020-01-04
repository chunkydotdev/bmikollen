import React from 'react';
import Hero from './layout/hero/Hero';
import Header from './layout/header/Header';
import Bmi from './layout/bmi/Bmi';
import styled from 'styled-components';
import Faq from './layout/faq/Faq';
import Footer from './layout/footer/Footer';

const AppRoot = styled.div``;

class App extends React.Component {
  render() {
    return (
      <AppRoot>
        <Hero></Hero>
        <div className="mb-5">
          <Header title='BMI Kollen'></Header>
        </div>
        <div className="mb-20 container mx-auto px-10">
          <Bmi></Bmi>
        </div>
        <div className="mb-20 container mx-auto">
          <Faq></Faq>
        </div>
        <Footer></Footer>
      </AppRoot>
    );
  }

}

export default App;
