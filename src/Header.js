import React from "react";
import "./Header.css";

function Header() {
  const imageSrc =
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg";
  const name = "Kitty Kat";
  const birthday = "Birthday: January 1";
  return (
    <header className="container">
      <div>
        <img src={imageSrc} alt="Orange-kitten" width="500px" height="500px" />
      </div>
      <div className= "header">
        <h1>{name}</h1>
        <h2>{birthday}</h2>
      </div>
    </header>

      );
}

      export default Header;