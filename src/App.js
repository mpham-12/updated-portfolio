import './App.css';
import Header from './components/Header'
import Projects from './components/Projects';
import SideBar from './components/SideBar'
import Skills from './components/Skills';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
