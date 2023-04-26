import logo from "./logo.svg";
import "./App.css";
import { getRandomCode } from "./util/helper";
import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";

function App() {
  const [name, setName] = useState();
  const [age, setAge] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setName("John");
    }, 5000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <ContactForm name={name} age={age} guy="Name" />
      </header>
    </div>
  );
}

export default App;
