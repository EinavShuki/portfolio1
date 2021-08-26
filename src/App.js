import AboutMe from "./components/AboutMe";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <AboutMe />
      <Experience/>
      <Skills />
      <Projects />
      <Contacts />
    </>
  );
}

export default App;
