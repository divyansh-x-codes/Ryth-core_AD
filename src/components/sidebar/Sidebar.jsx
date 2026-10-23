import "./Sidebar.css";

function Sidebar({ currentPath = "/", onNavigate }) {
  const menu = [
    { name: "HOME", icon: "⌂", link: "/" },
    { name: "STORIES", icon: "▤", link: "/stories" },
    { name: "RYTH CLUB", icon: "♛", link: "/club" },
    { name: "BOOK LIBRARY", icon: "Ⅱ", link: "/books" },
    { name: "PROFILE", icon: "♙", link: "/profile" },
  ];

  function handleClick(e, link, soon) {
    if (soon) return;

    if (onNavigate) {
      e.preventDefault();
      onNavigate(link);
    }
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-menu">
        {menu.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className={
              currentPath === item.link
                ? "sidebar-item active"
                : "sidebar-item"
            }
            onClick={(e) =>
              handleClick(e, item.link, item.soon)
            }
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span>{item.name}</span>

            {item.soon && <span className="soon">SOON</span>}
          </a>
        ))}
      </div>

      <div className="club-card">
        <h3>👑 RYTH CLUB+</h3>

        <p>
          Unlock exclusive groups, live sessions,
          events and premium community.
        </p>

        <a
          href="/membership"
          className="join-button"
          onClick={(e) => handleClick(e, "/club", false)}
        >
          JOIN NOW <span>→</span>
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;