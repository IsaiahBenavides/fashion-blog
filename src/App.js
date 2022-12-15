import Header from './components/Header';
import Nav from './components/Nav';
import './App.css';
import Article from './components/Article';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <section id="leftSideBorder"></section>
      <section id="content">
        <Header />
        <Nav />
        <Article date='11/12/20' title='On the Street in Brooklyn' imageLink='https://ps-rtt-sei.herokuapp.com/fashionblog/blog-image-1.jpg' />
        <Article date='11/11/20' title='Vintage in Vogue' imageLink='https://ps-rtt-sei.herokuapp.com/fashionblog/blog-image-2.jpg' />
        <Footer />
      </section>
    </>
  );
}

export default App;
