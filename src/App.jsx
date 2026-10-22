
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import RightSidebar from "./components/sidebar/RightSidebar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <div className="page-layout">
        <Sidebar />

        <main className="main-content">
          <h1>Welcome to RythCore</h1>
          <p>Discover stories, ideas and perspectives.</p>
        </main>

        <RightSidebar />
      </div>
    </>
  );
}

export default App;
