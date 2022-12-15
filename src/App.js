import Header from './components/Header';
import Nav from './components/Nav';
import './App.css';
import Article from './components/Article';

function App() {
  return (
    <>
      <section id="leftSideBorder"></section>
      <section id="content">
        <Header />
        <Nav />
        <Article date='11/12/20' title='On the Street in Brooklyn' imageLink='https://ps-rtt-sei.herokuapp.com/fashionblog/blog-image-1.jpg' />
      </section>
    </>
  );
}

export default App;
