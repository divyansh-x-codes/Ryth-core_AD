
import { useState } from "react";
import "./BookLibrary.css";

const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self Improvement",
    image: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
    description: "Build better habits and break bad ones.",
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Finance",
    image: "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg",
    description: "Lessons on wealth, greed and happiness.",
  },
  {
    title: "Zero to One",
    author: "Peter Thiel",
    category: "Business",
    image: "https://covers.openlibrary.org/b/isbn/9780804139298-L.jpg",
    description: "Learn how to build something new.",
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    category: "Business",
    image: "https://covers.openlibrary.org/b/isbn/9780307887894-L.jpg",
    description: "Build and grow successful startups.",
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    category: "Self Improvement",
    image: "https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg",
    description: "Improve your focus and productivity.",
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    category: "Mindset",
    image: "https://covers.openlibrary.org/b/isbn/9780374533557-L.jpg",
    description: "Understand how your mind makes decisions.",
  },
  {
    title: "The 5 AM Club",
    author: "Robin Sharma",
    category: "Self Improvement",
    image: "https://covers.openlibrary.org/b/isbn/9781443456623-L.jpg",
    description: "Build a better morning routine.",
  },
  {
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    category: "Mindset",
    image: "https://covers.openlibrary.org/b/isbn/9780807014271-L.jpg",
    description: "Discover purpose and meaning in life.",
  },
];

const categories = [
  "All Books",
  "Self Improvement",
  "Business",
  "Technology",
  "Mindset",
  "Health",
  "Creativity",
  "Career",
  "Finance",
];

function BookLibrary() {
  const [category, setCategory] = useState("All Books");
  const [tab, setTab] = useState("Recommended");
  const [search, setSearch] = useState("");
  const [saved, setSaved] = useState([]);

  const filteredBooks = books.filter((book) => {
    const correctCategory =
      category === "All Books" || book.category === category;

    const correctSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    return correctCategory && correctSearch;
  });

  function toggleSave(title) {
    if (saved.includes(title)) {
      setSaved(saved.filter((book) => book !== title));
    } else {
      setSaved([...saved, title]);
    }
  }

  return (
    <div className="book-library">
      <div className="library-hero">
        <div className="hero-text">
          <span className="hero-label">✧ CURATED BOOK LIBRARY</span>

          <h1>
            Knowledge for
            <br />
            a better <span>you.</span>
          </h1>

          <div className="hero-buttons">
            <button
              onClick={() =>
                document.getElementById("book-collection")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Books →
            </button>

            <button
              className="library-outline"
              onClick={() => {
                setCategory("All Books");
                setSearch("");
              }}
            >
              ♧ My Library
            </button>
          </div>

          <p className="reader-count">
            👤 👤 👤 👤 👤 &nbsp; 25K+ readers are learning with RythCore
          </p>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85"
            alt="Person learning at a desk"
          />
        </div>
      </div>

      <div className="library-categories">
        {categories.map((item) => (
          <button
            key={item}
            className={
              category === item
                ? "library-category active-category"
                : "library-category"
            }
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="library-layout" id="book-collection">
        <section className="library-books">
          <div className="library-toolbar">
            <div className="library-tabs">
              {[
                "Recommended",
                "Bestsellers",
                "New Arrivals",
                "Most Saved",
                "Free Reads",
              ].map((item) => (
                <button
                  key={item}
                  className={tab === item ? "active-tab" : ""}
                  onClick={() => setTab(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <input
              type="text"
              placeholder="Search books..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="books-heading">
            <h2>{category}</h2>
            <span>{filteredBooks.length} books</span>
          </div>

          <div className="books-grid">
            {filteredBooks.map((book) => (
              <article className="library-book-card" key={book.title}>
                <div className="book-image">
                  <img
                    src={book.image}
                    alt={book.title}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <h3>{book.title}</h3>
                <p className="book-author">{book.author}</p>
                <p className="book-description">{book.description}</p>

                <div className="book-card-actions">
                  <button
                    className="book-read-button"
                    onClick={() => alert("Selected book: " + book.title)}
                  >
                    Read
                  </button>

                  <button
                    className={
                      saved.includes(book.title)
                        ? "book-save-button is-saved"
                        : "book-save-button"
                    }
                    onClick={() => toggleSave(book.title)}
                  >
                    {saved.includes(book.title) ? "♥" : "♧"}
                  </button>
                </div>
              </article>
            ))}

            {filteredBooks.length === 0 && <p>No books found.</p>}
          </div>
        </section>

        <aside className="library-right">
          <section className="library-panel">
            <h3>MY READING JOURNEY</h3>

            <div className="journey-body">
              <div className="journey-chart">
                <strong>12</strong>
                <span>Books</span>
              </div>

              <div className="journey-legend">
                <p><i className="blue-dot" /> <b>6</b> In Progress</p>
                <p><i className="green-dot" /> <b>4</b> Completed</p>
                <p><i className="orange-dot" /> <b>{saved.length}</b> Saved</p>
              </div>
            </div>
          </section>

          <section className="library-panel">
            <h3>CONTINUE READING</h3>

            <div className="continue-reading">
              <img
                src="https://covers.openlibrary.org/b/isbn/9781455586691-M.jpg"
                alt="Deep Work"
              />

              <div className="continue-details">
                <h4>Deep Work</h4>
                <p>Cal Newport</p>

                <div className="reading-progress">
                  <span />
                </div>

                <small>66% completed</small>

                <button onClick={() => alert("Continue reading Deep Work")}>
                  Continue →
                </button>
              </div>
            </div>
          </section>

          <section className="library-panel">
            <h3>TRENDING BOOKS THIS WEEK</h3>

            {books.slice(0, 3).map((book, index) => (
              <div className="trending-row" key={book.title}>
                <strong>0{index + 1}</strong>
                <img src={book.image} alt={book.title} />

                <div>
                  <h4>{book.title}</h4>
                  <p>{book.author}</p>
                </div>

                <span>♥</span>
              </div>
            ))}
          </section>

          <section className="library-panel">
            <h3>TOP READERS</h3>

            <div className="top-reader">
              <span className="reader-avatar">S</span>
              <div>
                <h4>RythCore Reader</h4>
                <p>Community member</p>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}

export default BookLibrary;
