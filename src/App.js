import React, { useState } from "react";
import "./styles.css";

var color = "aqua";

const emojiDictionary = {
  "🙂": "Smiling",
  "😉": "Wink",
  "😢": "Cry",
  "😎": "cool"
};

var emojisInAPP = Object.keys(emojiDictionary);

export default function App() {
  const [description, setDescription] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var description = emojiDictionary[userInput];
    if (description === undefined) {
      description = "Oops! We don't have this Emoji yet in our Library";
    }

    setDescription(description);
  }

  function emojiClickHandler(emoji) {
    var description = emojiDictionary[emoji];
    setDescription(description);
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>
        Emoji Detector{" "}
        <span role="img" aria-label="Detective">
          👀 🔍
        </span>
      </h1>

      <input onChange={emojiInputHandler}></input>
      <div>{description}</div>
      <h3>Emojis present in this app </h3>
      {emojisInAPP.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "1rem",
              margin: "1rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
