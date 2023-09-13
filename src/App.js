import React, { useState } from "react";
import "./styles.css";

var color = "aqua";

const emojiDictionary = {
  "🐵": "Monkey face",
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🦧": "Orangutan",
  "🐶": "Dog face",
  "🐕": "Dog",
  "🦮": "Guide dog",
  "🐕‍🦺": "Service dog",
  "🐩": "Poodle",
  "🐺": "Wolf",
  "🦊": "Fox",
  "🦝": "Racoon",
  "🐱": "Cat face",
  "🐈": "Cat",
  "🐈‍⬛": "Black Cat",
  "🦁": "Lion",
  "🐯": "Tiger face",
  "🐅": "Tiger",
  "🐆": "Leopard",
  "🐴": "Horse face",
  "🐎": "Horse",
  "🦄": "Unicorn",
  "🦓": "Zebra",
  "🦌": "Deer",
  "🦬": "Bison",
  "🐮": "Cow face",
  "🐄": "Cow",
  "🐂": "Ox",
  "🐃": "Water buffalo",
  "🐷": "Pig face",
  "🐖": "Pig",
  "🐗": "Boar",
  "🐽": "Pig nose",
  "🐏": "Ram",
  "🐑": "Ewe",
  "🐐": "Goat",
  "🐪": "Camel",
  "🐫": "Two hump camel",
  "🦙": "Llama",
  "🦒": "Giraffe",
  "🐘": "Elephant",
  "🦣": "Mammoth",
  "🦏": "Rhinoceros",
  "🦛": "Hippopotamus",
  "🐭": "Mouse face",
  "🐁": "Mouse",
  "🐀": "Rat",
  "🐹": "Hamster",
  "🐰": "Rabbit face",
  "🐇": "Rabbit",
  "🐿": "Chipmunk",
  "🦫": "Beaver",
  "🦔": "Hedgehog",
  "🦇": "Bat",
  "🐻": "Bear",
  "🐻‍❄️": "Polar bear",
  "🐨": "Koala",
  "🐼": "Panda",
  "🦥": "Sloth",
  "🦦": "Otter",
  "🦨": "Skunk",
  "🦘": "Kangaroo",
  "🦡": "Badger",
  "🐾": "Paw prints",
  "🦃": "Turkey",
  "🐔": "Chicken",
  "🐓": "Rooster",
  "🐣": "Hatching",
  "🐤": "Baby chick",
  "🐥": "Front-facing chick",
  "🐦": "Bird",
  "🐦‍⬛": "Black bird",
  "🐧": "Penguin",
  "🕊": "Dove",
  "🦅": "Eagle",
  "🦆": "Duck",
  "🦢": "Swan",
  "🦉": "Owl",
  "🦤": "Dodo",
  "🪶": "Feather",
  "🦩": "Flamingo",
  "🦜": "Peacock",
  "🐸": "Frog",
  "🐊": "Crocodile",
  "🐢": "Turtle",
  "🦎": "Lizard",
  "🐍": "Snake",
  "🐲": "Dragon face",
  "🐉": "Dragon",
  "🦕": "Sauropod",
  "🦖": "Tyrannosaurus",
  "🐳": "Spouting whale",
  "🐋": "Whale",
  "🐬": "Dolphin",
  "🦭": "Seal",
  "🐟": "Fish",
  "🐠": "Tropical fish",
  "🐡": "Blowfish",
  "🦈": "Shark",
  "🐙": "Octopus",
  "🐚": "Spiral shell",
  "🐌": "Snail",
  "🦋": "Butterfly",
  "🐛": "Bug",
  "🐜": "Ant",
  "🐝": "Honeybee",
  "🪲": "Beetle",
  "🐞": "Lady Beetle",
  "🦗": "Cricket",
  "🪳": "Cockroach",
  "🕷": "Spider",
  "🕸": "Spider web",
  "🦂": "Scorpion",
  "🦟": "Mosquito",
  "🪰": "Fly",
  "🪱": "Worm",
  "🦠": "Microbe",
};

var emojisInApp = Object.keys(emojiDictionary);

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
        Animal Emoji Detector{" "}
        <span role="img" aria-label="Detective">
          👀 🔍
        </span>
      </h1>

      <input onChange={emojiInputHandler}></input>
      <div
        style={{ fontSize: "2.5rem", fontWeight: "bold", color: "darkblue" }}
      >
        {description}
      </div>
      <h3>Emojis present in this app </h3>
      {emojisInApp.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              fontWeight: "bolder",
              padding: "1rem",
              margin: "1rem",
              cursor: "pointer",
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
