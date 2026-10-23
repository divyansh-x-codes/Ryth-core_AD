
import { useState } from "react";
import "./Navbar.css";

function Navbar({ onNavigate }) {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      <a
        href="/"
        className="logo"
        onClick={(e) => {
          if (onNavigate) {
            e.preventDefault();
            onNavigate("/");
          }
        }}
      >
        <div className="logo-box">R</div>
        <h2>Ryth<span>Core</span></h2>
      </a>

      <div className="search-area">
        <div className="search-box">
          <span>⌕</span>
          <input
            placeholder="Search stories, topics, or writers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <a href="/editorial" className="editorial">
        <div className="editorial-icon">✧</div>
        <div>
          <strong>Ryth Editorial</strong>
          <small>Perspective Network</small>
        </div>
      </a>

      <a href="/write" className="write">
        ✎ Write
      </a>

      <div className="profile-area">
        <button
          className="profile"
          onClick={() => setOpen(!open)}
        >
          <div className="avatar">S</div>
          <strong>Simply</strong>
          <span className="arrow">⌄</span>
        </button>

        {open && (
          <div className="dropdown">
            <div className="user-info">
              <strong>Simply Divyansh</strong>
              <small>@simplydivyanshk_AvvHE</small>
            </div>

            <a href="/profile">My Profile</a>
            <a href="/saved">Saved Stories</a>
            <a href="/settings">Settings</a>

            <button
              className="signout"
              onClick={() => setOpen(false)}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>

    </nav>
  );
}

export default Navbar;
