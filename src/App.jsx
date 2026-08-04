import "./App.css";
import blogImageOne from "./assets/blog-image-1.jpg";
import blogImageTwo from "./assets/blog-image-2.jpg";
import Article from "./components/Article.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <>
      <Header />

      <main>
        <Article
          date="11/12/20"
          title="On the Street in Brooklyn"
          image={blogImageOne}
          alt="A woman in an orange dress standing by a blue wall"
          firstWord="Cray"
        />

        <Article
          date="11/11/20"
          title="Vintage in Vogue"
          image={blogImageTwo}
          alt="Three people wearing vintage fashion"
          firstWord="Selfies"
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
