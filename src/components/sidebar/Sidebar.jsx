
import { useState } from "react";
import "./Sidebar.css";

function Sidebar() {
  const [active, setActive] = useState("HOME");

  const menu = [
    { name: "HOME", icon: "⌂", link: "/" },
    { name: "STORIES", icon: "▤", link: "/stories" },
    { name: "LEARN", icon: "♧", link: "/learn", soon: true },
    { name: "RYTH CLUB", icon: "♛", link: "/club" },
    { name: "BOOK LIBRARY", icon: "Ⅱ", link: "/books" },
    { name: "PROFILE", icon: "♙", link: "/profile" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-menu">
        {menu.map((item) => (
          <a
            href={item.link}
            key={item.name}
            className={
              active === item.name
                ? "sidebar-item active"
                : "sidebar-item"
            }
            onClick={() => setActive(item.name)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span>{item.name}</span>

            {item.soon && <span className="soon">SOON</span>}
          </a>
        ))}
      </div>

      <div className="club-card">
        <h3>
          <span className="club-crown">♛</span>
          RYTH CLUB+
        </h3>

        <p>
          Unlock exclusive groups, live sessions,
          events and premium community.
        </p>

        <a href="/membership" className="join-button">
          JOIN NOW <span>→</span>
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
