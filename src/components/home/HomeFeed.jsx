
import "./HomeFeed.css";

function HomeFeed() {
  return (
    <div className="home-feed">

      <section className="hero">
        <div className="hero-text">
          <span className="hero-tag">
            ✧ IDEAS • PEOPLE • PERSPECTIVES
          </span>

          <h1>
            A place for the
            <br />
            curious <span>mind.</span>
          </h1>

          <div className="hero-buttons">
            <button>Explore Stories →</button>
            <button className="watch-button">▷ Watch Intro</button>
          </div>

          <p className="community">
            👤 👤 👤 👤 👤 &nbsp; 12K+ curious minds are already here
          </p>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Creator working at a computer"
          />
        </div>
      </section>

      <div className="categories">
        <span className="selected">For you</span>
        <span>Technology</span>
        <span>Business</span>
        <span>Mindset</span>
        <span>Health</span>
        <span>Culture</span>
        <span>Creativity</span>
        <span>Career</span>
        <strong>Latest⌄</strong>
      </div>

      <article className="feed-article">
        <img
          src=""
          alt="People discussing ideas"
        />

        <div className="article-content">
          <p className="article-ceategory">
            Technology · <span>8 min read</span>
          </p>

          <h2>Discipline in a Distracted World</h2>

          <p className="article-description">
            How to build focus when everything around you is
            pulling your attention. Practical frameworks,
            personal experiences, and cognitive routines
            for high performance.
          </p>

          <div className="article-author">
            <strong>Digvijay Shahi </strong>
            <span>• Sep 28, 2025</span>
            <span className="article-likes">♥ 1.2K</span>
          </div>
        </div>
      </article>

      <article className="feed-article">
        <img
          src=""
          alt="Learning with technology"
        />

        <div className="article-content">
          <p className="article-category">
            Business · <span>6 min read</span>
          </p>

          <h2>How AI Is Changing the Way We Learn</h2>

          <p className="article-description">
            From personalized education to smarter tools,
            AI is opening new possibilities for students,
            creators, and lifelong learners.
          </p>

          <div className="article-author">
            <strong> RythCore Editorial</strong>
            <span>• Oct 10, 2026</span>
          </div>
        </div>
      </article>

    </div>
  );
}

export default HomeFeed;
