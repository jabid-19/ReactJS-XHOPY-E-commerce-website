import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Trending from "./components/Trending";
import Best from "./components/Best";
import NewsLetters from "./components/NewsLetters";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav></Nav>
      </header>
      <main>
        <Hero></Hero>
        <Category></Category>
        <Trending></Trending>
        <Best></Best>
        <NewsLetters></NewsLetters>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
