
import { useState } from "react";
import "./Profile.css";

function Profile() {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    "Overview",
    "Stories",
    "Bookmarks",
    "Notes",
    "Reading List",
    "Activity",
    "Settings",
  ];

  const stats = [
    { icon: "♧", number: "0", name: "Stories" },
    { icon: "♙", number: "0.0K", name: "Followers" },
    { icon: "◉", number: "0.0K", name: "Total Reads" },
    { icon: "♧", number: "0", name: "Bookmarks"},
  ];

  return (
    <div className="profile-page">

     
      <div className="profile-cover">
        <img
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80"
          alt="Profile cover"
        />
      </div>

    
      <div className="profile-details">

        <div className="profile-avatar">
          <img
          />
          
        </div>

        <button
          className="edit-profile"
          onClick={() => alert("Edit Profile")}
        >
          ✎ Edit Profile
        </button>

        <h1>simplydivyanshk_AvvHE</h1>

        <p className="profile-username">
          @simplydivyanshk_AvvHE · Writer · Learner
        </p>

        <p className="profile-bio">
          Curious mind & writer sharing perspectives on RythCore.
        </p>

        <div className="profile-info">
          <span>♧ India</span>
          <a href="https://rythcore.com">
            🌐 rythcore.com/@simplydivyanshk_AvvHE
          </a>
          <span>▢ Joined recently</span>
        </div>

        <div className="profile-stats">
          <span><b>0</b> Stories</span>
          <span><b>0.0K</b> Followers</span>
          <span><b>0</b> Following</span>
          <span><b>0.0K</b> Reads</span>
          <span><b>0</b> Bookmarks</span>
        </div>
      </div>

     
      <div className="profile-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={
              activeTab === tab
                ? "profile-tab active"
                : "profile-tab"
            }
            onClick={() => setActiveTab(tab)}
          >
            {tab}

            {tab === "Stories" && <span>0</span>}
            {tab === "Bookmarks" && <span>0</span>}
            {tab === "Notes" && <span>2</span>}
            {tab === "Reading List" && <span>3</span>}
          </button>
        ))}
      </div>

     
      <div className="profile-content">

        {activeTab === "Overview" && (
          <>
            <div className="profile-dashboard">

             
              <section className="journey-card">
                <div className="profile-card-heading">
                  <div>
                    <h2>Your Journey</h2>
                    <p>Keep exploring, keep growing.</p>
                  </div>

                  <button onClick={() => setActiveTab("Activity")}>
                    View All Stats →
                  </button>
                </div>

                <div className="profile-stat-grid">
                  {stats.map((stat) => (
                    <div className="profile-stat-card" key={stat.name}>
                      <span>{stat.icon}</span>
                      <h3>{stat.number}</h3>
                      <p>{stat.name}</p>
                      <small>{stat.growth}</small>
                    </div>
                  ))}
                </div>
              </section>

             
              <section className="streak-card">
                <h2>🔥 Reading Streak</h2>
                <p>Keep the momentum going!</p>

                <div className="streak-number">
                  <strong>0</strong> Days
                </div>

                <div className="streak-dots">
                  {Array.from({ length: 10 }, (_, index) => (
                    <span
                      key={index}
                      className={index < 8 ? "streak-active" : ""}
                    />
                  ))}
                </div>

                <p className="streak-message">
                  You're doing great!
                </p>
              </section>
            </div>

        
            <section className="recent-stories">
              <div className="profile-card-heading">
                <div>
                  <h2>Recent Stories</h2>
                  <p>Your latest thoughts and ideas.</p>
                </div>

                <button onClick={() => setActiveTab("Stories")}>
                  See All →
                </button>
              </div>

              <div className="empty-stories">
                <span>▤</span>
                <h3>No stories yet</h3>
                <p>Your published stories will appear here.</p>

                <button onClick={() => alert("Write a story")}>
                  + Write Your First Story
                </button>
              </div>
            </section>
          </>
        )}

        {activeTab === "Stories" && (
          <section className="profile-section">
            <h2>My Stories</h2>
            <p>Your published stories will appear here.</p>
          </section>
        )}

        {activeTab === "Bookmarks" && (
          <section className="profile-section">
            <h2>My Bookmarks</h2>
            <p>Stories you bookmark will appear here.</p>
          </section>
        )}

        {activeTab === "Notes" && (
          <section className="profile-section">
            <h2>My Notes</h2>
            <p>Your saved notes will appear here.</p>
          </section>
        )}

        {activeTab === "Reading List" && (
          <section className="profile-section">
            <h2>Reading List</h2>
            <p>Your reading list will appear here.</p>
          </section>
        )}

        {activeTab === "Activity" && (
          <section className="profile-section">
            <h2>Your Activity</h2>
            <p>Your reading and writing activity will appear here.</p>
          </section>
        )}

        {activeTab === "Settings" && (
          <section className="profile-section">
            <h2>Profile Settings</h2>
            <p>Manage your profile and preferences.</p>

            <button onClick={() => alert("Edit profile settings")}>
              Edit Settings
            </button>
          </section>
        )}

      </div>
    </div>
  );
}

export default Profile;
