import "./App.css";
import dividerIcon from "./images/pattern-divider-mobile.svg";

import TextAdvice from "./TextAdvice";

//https://api.adviceslip.com
function App() {
  return (
    <div className="App">
      <div className="advice-container">
        <TextAdvice />

        <img className="divider-icon" src={dividerIcon} alt="divider-icon" />
      </div>
    </div>
  );
}

export default App;
