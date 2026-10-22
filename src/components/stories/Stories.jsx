
import "./Stories.css";

function Stories() {
  const stories = [
    {
      title: "Discipline Changes Everything",
      image: "photo-1470252649378-9c29740c9fa8",
      type: "Shorts",
      time: "0:58",
    },
    {
      title: "How I Built My Focus Routine",
      image: "photo-1590602847861-f357a9332bbc",
      type: "Podcast",
      time: "12:34",
    },
    {
      title: "A Day in My Life as a Creator",
      image: "photo-1464822759023-fed622ff2c3b",
      type: "Video",
      time: "1:45",
    },
    {
      title: "The Power of Small Habits",
      image: "photo-1497633762265-9d179a990aa6",
      type: "Article",
      time: "5 min read",
    },
    {
      title: "Mental Health in Your 20s",
      image: "photo-1500648767791-00dcc994a43e",
      type: "Interview",
      time: "2:31",
    },
  ];

  const formats = [
    { name: "Articles", count: "12K+ stories", image: "photo-1497633762265-9d179a990aa6", color: "#30206c" },
    { name: "Videos", count: "4.8K videos", image: "photo-1516035069371-29a1b244cc32", color: "#08776e" },
    { name: "Shorts", count: "2.1K shorts", image: "photo-1511707171634-5f897ff02aa9", color: "#c41458" },
    { name: "Podcasts", count: "1.2K episodes", image: "photo-1590602847861-f357a9332bbc", color: "#203d87" },
    { name: "Interviews", count: "980 conversations", image: "photo-1497366754035-f200968a6e72", color: "#78330f" },
    { name: "Series", count: "640 series", image: "photo-1485846234645-a62644f84728", color: "#303c4e" },
  ];

  const videos = [
    { title: "The AI Revolution", image: "photo-1635070041078-e363dbe005cb", time: "10:15" },
    { title: "Discipline in a Distracted World", image: "photo-1521737711867-e3b97375f902", time: "8:42" },
    { title: "Finding Your Purpose", image: "photo-1470252649378-9c29740c9fa8", time: "12:10" },
    { title: "Explore the World", image: "photo-1470252649378-9c29740c9fa8", time: "4:34" },
  ];

  return (
    <div className="stories-page">

      <section className="stories-section">
        <div className="stories-heading">
          <h2>Stories for You</h2>
          <button>See all →</button>
        </div>

        <div className="story-list">
          {stories.map((story) => (
            <article className="story-card" key={story.title}>
              <div className="story-image">
                <img
                  src={`https://images.unsplash.com/${story.image}?auto=format&fit=crop&w=500&q=80`}
                  alt={story.title}
                />
                <button className="bookmark">♧</button>
                <span className="story-time">{story.time}</span>
                <span className="story-type">{story.type}</span>
              </div>
              <h3>{story.title}</h3>
            </article>
          ))}
        </div>
      </section>
      <section className="format-section">
        <h2>Browse by Format</h2>

        <div className="format-list">
          {formats.map((format) => (
            <div
              className="format-card"
              key={format.name}
              style={{ backgroundColor: format.color }}
            >
              <img
                src={`https://images.unsplash.com/${format.image}?auto=format&fit=crop&w=300&q=80`}
                alt=""
              />

              <div className="format-info">
                <h3>{format.name}</h3>
                <p>{format.count}</p>
                <button aria-label={`Explore ${format.name}`}>→</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="trending-videos">
        <div className="stories-heading">
          <h2>Trending Videos</h2>
          <button>See all →</button>
        </div>

        <div className="video-list">
          {videos.map((video) => (
            <article className="video-card" key={video.title}>
              <div className="video-image">
                <img
                  src={`https://images.unsplash.com/${video.image}?auto=format&fit=crop&w=500&q=80`}
                  alt={video.title}
                />
                <button className="play-button">▶</button>
                <span>{video.time}</span>
              </div>
              <h3>{video.title}</h3>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Stories;
