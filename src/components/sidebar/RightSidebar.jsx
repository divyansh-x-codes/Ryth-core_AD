
import "./RightSidebar.css";

function RightSidebar() {
  const trending = [
    { title: "The Power of Small Habits", time: "5 min read", likes: "2.1k" },
    { title: "Why AI Agents Are the Next Big Shift", time: "7 min read", likes: "1.8k" },
    { title: "Building a Life You're Proud Of", time: "6 min read", likes: "1.6k" },
  ];

  const creators = [
    { name: "Aarav", img: "https://i.pravatar.cc/80?img=12" },
    { name: "Riya", img: "https://i.pravatar.cc/80?img=47" },
    { name: "Karan", img: "https://i.pravatar.cc/80?img=13" },
    { name: "Sneha", img: "https://i.pravatar.cc/80?img=44" },
    { name: "Arjun", img: "https://i.pravatar.cc/80?img=68" },
  ];

  return (
    <aside className="right-sidebar">

      <section className="right-card">
        <h3>TODAY'S THOUGHT</h3>

        <div className="thought-content">
          <div className="quote-icon">❞</div>
          <p>
            "Discipline is not about doing what you love,
            but about doing what your future self will
            thank you for."
          </p>
          <strong>— RythCore</strong>
        </div>
      </section>

      <section className="right-card">
        <h3>TRENDING THIS WEEK</h3>

        {trending.map((item, index) => (
          <div className="trending-item" key={item.title}>
            <strong className="trend-number">0{index + 1}</strong>

            <div className="trend-info">
              <strong>{item.title}</strong>
              <p>
                {item.time} •
                <span className="likes"> ♥ {item.likes}</span>
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="right-card">
        <h3>TOP CREATORS</h3>

        <div className="creators-list">
          {creators.map((creator) => (
            <div className="creator" key={creator.name}>
              <img src={creator.img} alt={creator.name} />
              <strong>{creator.name}</strong>
              <button>Follow</button>
            </div>
          ))}
        </div>
      </section>

      <section className="right-card">
        <h3>RYTHCORE PICKS</h3>
        <div className="picks-content">
          <p>Stories worth your time.</p>
        </div>
      </section>

    </aside>
  );
}

export default RightSidebar;
