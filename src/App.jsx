import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import RightSidebar from "./components/sidebar/RightSidebar";
import HomeFeed from "./components/home/HomeFeed";
import Stories from "./components/stories/Stories";
import "./App.css";

function App() {
  const path = window.location.pathname;

  return (
    <>
      <Navbar />

      <div className="page-layout">
        <Sidebar />

        <main className="main-content">
          {path === "/stories" ? <Stories /> : <HomeFeed />}
        </main>

        <RightSidebar />
      </div>
    </>
  );
}

export default App;