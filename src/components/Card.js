import React from "react";
import "../styles/card.css";

function Card(props) {
  return (
    <div className="cards-container">
      <button className="ribbon-btn">
        <img src="./img/ribbon.svg" width="18" height="18" />
        Gold Standard
      </button>
      <h1 className="title-container">
        {props.name} 
      </h1>
      <p className="preview-container">
        file preview here 
      </p>
      <a className="refrences" href={props.url} target="_blank" download={true}>
        <span className="open-file-tag">
          <button className="open-file-btn">
            <i id="file-icon" class="fa-solid fa-file"></i>Open File
          </button>
        </span>
        <span className="rating-icons">
          <span className="rate-container">
            <i id="rate-icon" class="fa-solid fa-star"></i>
            {props.rate}
          </span>
          <img
            id="share-icon"
            src="./img/Group 427319296.svg"
            width="30"
            height="30"
            alt="Share"
          />
          <button className="share-btn">
            <img src="./img/Icon.svg" width="20" height="20" alt="IBM" />
            share
          </button>
          <img
            src="./img/logo-salesforce.svg"
            width="40"
            height="40"
            alt="SalesForce"
          />
        </span>
      </a>
    </div>
  );
}

export default Card;
