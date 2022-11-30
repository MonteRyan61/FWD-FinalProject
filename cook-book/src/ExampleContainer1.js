import React, {useState} from "react";
import './MainContainer.css';
import Search from "./Search";
import CookingTitles from "./CookingTitles";
import Ingredents from "./ingredents";
import './App.css';

export default function App() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    // 👇️ toggle isActive state variable
    setIsActive(current => !current);
  };

  return (
    <div>
      <button className={isActive ? 'ExampleConatiner' : ''} onClick={handleClick}>
        Click
      </button>
    </div>
  );
}
