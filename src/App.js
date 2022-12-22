import About from "./components/About";
import Socials from "./components/Socials";
import Interests from "./components/Interests";
import Info from "./components/Info";


function App() {
  return (
    <div className="the-full-container">
      <div className="the-second-container">
        <div className="the-card">
          <Info/>
          <About />
          <Interests />
          <Socials />
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
