import "./App.css";
import Greeting from "./components/Greating/Greeting";
import Hero from "./components/Hero/Hero";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import Tool from "./components/Tool/Tool";

function App() {
  return (
    <>
      <Greeting name="John" />
      <Greeting name="Bob" age={35} />
      <Tool />
      <Hero />
      <ProfileCard
        avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Portrait_of_Neytiri.jpg/500px-Portrait_of_Neytiri.jpg"
        name="Neytiri"
        description="Neytiri is the princess of the Na'vi clan, Omaticaya."
      />
    </>
  );
}

export default App;

// Hero внутри section
// SPA single page application
