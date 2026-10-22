import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"
import RightSidebar from "./components/sidebar/RightSidebar"
import HomeFeed from "./components/home/HomeFeed"
import "./App.css"

function App() {
  return (
    <>
      <Navbar />

      <div className="page-layout">
        <Sidebar />

        <main className="main-content">
          <HomeFeed />
        </main>

        <RightSidebar />
      </div>
    </>
  );
}

export default App;