import React from "react";
import "../styles/nav.css";

function NavBar() {
  return (
    <div className="nav-container">
      <nav className="nav-items">
        <img src="./img/pwc.svg" alt="PWC" width="50" height="60" />
        <span className="buttons-area">
          <button>
            <i class="fa-solid fa-star"></i>
          </button>
          <button>
            <i class="fa-solid fa-plus"></i>
          </button>
          <button>
            <i class="fa-solid fa-question"></i>
          </button>
          <button>
            <i class="fa-solid fa-bell"></i>
          </button>
          <img
            className="avatar-img"
            src="./img/avatar-svgrepo-com.svg"
            alt="Avatar"
            width="30"
            height="30"
          />
        </span>
      </nav>
      <nav>
        <span className="KM-icon">
          <img src="./img/Waffle.svg" alt="KM" width="25" height="25" />
          <h3>Consulting Knowledge Hub</h3>
          <a>
            <p>Home</p>
          </a>
          <a>
            <p>Directory</p>
          </a>
        </span>
      </nav>
    </div>
  );
}

export default NavBar;
