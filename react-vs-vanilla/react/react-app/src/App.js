import { useState } from "react";
import "./style.css";

const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem"
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering"
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)"
  ],
  [
    "Lorem ipsum dolor sit amet",
    "consectetur adipisicing elit",
    "Esse laborum consectetur reiciendis"
  ]  
];

export default function App(){

  const [activeContentIndex, setActiveContentIndex] = useState(0);

  function setActive(toggle){
    console.log(toggle);
    setActiveContentIndex(toggle);
  }
  return (
    <div className="container">
      <header>
        <img src="react-logo.png" alt="React logo" />
        <div>
          <h1>
            React.js
          </h1>
          <p>i.e, using the React library for rendering the UI</p>
        </div>
      </header>
      <div id="tabs">
        <menu>
          <button 
            className={activeContentIndex === 0 ? "active" : ""} 
            onClick={()=> setActive(0)}
            >
            Why React?
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActive(1)}
            >
            Core Features
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={()=>setActive(2)}
            >
            Related Resources
          </button>
          <button
            className={activeContentIndex === 3 ? "active" : ""}
            onClick={()=>setActive(3)}
            >
            React vs JS
          </button>          
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item)=> (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}