import { useState } from "react";
import diceIcon from "./images/icon-dice.svg";
function TextAdvice() {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function getAdvice() {
    try {
      setIsLoading(true);
      const res = await fetch("https://api.adviceslip.com/advice");
      if (!res.ok) throw new Error("failed to fetch advice");
      const data = await res.json();
      console.log(data);
      setAdvice(data.slip.advice);
      setId(data.slip.id);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching advice:", error);
      setAdvice("Failed to load advice. Try again!");
    }
  }

  return (
    <>
      {id ? (
        <p className="advice-count">ADVICE #{id}</p>
      ) : (
        <p className="click-on-the-dice">
          Click on the dice to generate advice...
        </p>
      )}
      <div>
        {isLoading ? (
          <div className="loading">Loading...</div>
        ) : (
          <p className="advice-text">{advice}</p>
        )}
      </div>

      <div className="dice-container" onClick={() => getAdvice()}>
        <img className="dice-icon" src={diceIcon} alt="dice-icon" />
      </div>
    </>
  );
}

export default TextAdvice;
