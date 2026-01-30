import Header from "../../Components/Header/Header";
import "./Home.css";
import Skills from "../../Components/Skills/Skills";
import About from "../../Components/About/About";
import Footer from "../../Components/Footer/Footer";
import Projects from "../../Components/Projects/Projects";
import Navbar from "../../Components/Navbar/Navbar";


const Home = () => {
  return (
    <>
    <Navbar />
    <Header />
    <Skills />
    <About />
    <Projects />
    <Footer />
    </>
  );
};

export default Home;
