
import { useState, useEffect } from "react";

import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import RightSidebar from "./components/sidebar/RightSidebar";
import HomeFeed from "./components/home/HomeFeed";
import Stories from "./components/stories/Stories";
import BookLibrary from "./components/books/BookLibrary";
import Profile from "./components/profile/Profile";

import "./App.css";

function App() {
  const [currentPath, setCurrentPath] = useState(
    window.location.pathname || "/"
  );

  useEffect(() => {
    function handleBack() {
      setCurrentPath(window.location.pathname || "/");
    }

    window.addEventListener("popstate", handleBack);

    return () => {
      window.removeEventListener("popstate", handleBack);
    };
  }, []);

  function navigate(path) {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  }

  const isBooks = currentPath === "/books";
  const isStories = currentPath === "/stories";
  const isProfile = currentPath === "/profile";

  return (
    <>
      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
      />

      <div className="page-layout">
        <Sidebar
          currentPath={currentPath}
          onNavigate={navigate}
        />

        <main className={`main-content ${isBooks ? "no-padding" : ""}`}>
          {isStories ? (
            <Stories onNavigate={navigate} />
          ) : isBooks ? (
            <BookLibrary onNavigate={navigate} />
          ) : isProfile ? (
            <Profile onNavigate={navigate} />
          ) : (
            <HomeFeed onNavigate={navigate} />
          )}
        </main>

        {!isBooks && <RightSidebar onNavigate={navigate} />}
      </div>
    </>
  );
}

export default App;
