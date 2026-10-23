
import { useState } from "react";
import "./Write.css";

function Write({ onNavigate }) {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const [topic, setTopic] = useState("");
  const [topics, setTopics] = useState(["Technology", "AI", "Productivity"]);
  const [articleType, setArticleType] = useState("Article");
  const [activeTab, setActiveTab] = useState("Basic");
  const [cover, setCover] = useState("");
  const [comments, setComments] = useState(true);
  const [preview, setPreview] = useState(false);

  function formatText(command) {
    document.execCommand(command, false, null);
  }

  function addTopic() {
    if (topic.trim() && !topics.includes(topic.trim())) {
      setTopics([...topics, topic.trim()]);
    }
    setTopic("");
  }

  function removeTopic(item) {
    setTopics(topics.filter((topic) => topic !== item));
  }

  function publishArticle() {
    if (!title.trim() || !content.trim()) {
      alert("Please enter an article title and content.");
      return;
    }

    alert("Article ready to publish!");
  }

  return (
    <div className="write-page">
      {/* Editor top bar */}
      <div className="write-topbar">
        <button onClick={() => onNavigate && onNavigate("/")}>
          ← Back
        </button>

        <span>✓ Saved just now</span>

        <div>
          <button onClick={() => setPreview(!preview)}>
            {preview ? "Edit" : "Preview"}
          </button>

          <button className="publish-button" onClick={publishArticle}>
            ➤ Publish
          </button>
        </div>
      </div>

      <div className="write-layout">
        {/* Article editor */}
        <main className="write-editor">
          {preview ? (
            <div className="article-preview">
              {cover && <img src={cover} alt="Article cover" />}
              <h1>{title || "Your article title"}</h1>
              <p>{subtitle}</p>
              <div
                dangerouslySetInnerHTML={{
                  __html: content || "Your article content will appear here.",
                }}
              />
            </div>
          ) : (
            <>
              <input
                className="article-title"
                placeholder="Write a compelling title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <input
                className="article-subtitle"
                placeholder="Add a subtitle (optional) to give readers more context..."
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
              />

              {/* Formatting toolbar */}
              <div className="editor-toolbar">
                <select
                  onChange={(e) => formatText(e.target.value)}
                  defaultValue=""
                >
                  <option value="" disabled>Paragraph</option>
                  <option value="formatBlock:p">Paragraph</option>
                  <option value="formatBlock:h2">Heading 2</option>
                  <option value="formatBlock:h3">Heading 3</option>
                </select>

                <button onClick={() => formatText("bold")}>
                  <b>B</b>
                </button>

                <button onClick={() => formatText("italic")}>
                  <i>I</i>
                </button>

                <button onClick={() => formatText("underline")}>
                  <u>U</u>
                </button>

                <button onClick={() => formatText("insertUnorderedList")}>
                  • List
                </button>

                <button onClick={() => formatText("insertOrderedList")}>
                  1. List
                </button>

                <button onClick={() => formatText("formatBlock", "blockquote")}>
                  ❝ Quote
                </button>
              </div>

              <div
                className="article-content"
                contentEditable
                suppressContentEditableWarning
                onInput={(e) => setContent(e.currentTarget.innerHTML)}
                data-placeholder="Start writing your story..."
              />
            </>
          )}
        </main>

        {/* Article settings */}
        <aside className="write-settings">
          <h2>Article Settings</h2>

          <div className="settings-tabs">
            {["Basic", "SEO", "Advanced"].map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? "selected" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === "Basic" && (
            <>
              <label>Cover Image</label>

              <div className="cover-upload">
                {cover && <img src={cover} alt="Cover preview" />}

                <p>Upload cover image</p>
                <small>Recommended: 16:9 (1200 × 675)</small>

                <label className="choose-image">
                  Choose Image
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) setCover(URL.createObjectURL(file));
                    }}
                  />
                </label>
              </div>

              <label>Topics</label>

              <div className="topic-input">
                <input
                  placeholder="Enter a topic..."
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") addTopic();
                  }}
                />

                <button onClick={addTopic}>Add</button>
              </div>

              <div className="topic-list">
                {topics.map((item) => (
                  <button key={item} onClick={() => removeTopic(item)}>
                    {item} ×
                  </button>
                ))}
              </div>

              <label>Article Type</label>

              <div className="article-types">
                {["Article", "Essay", "Guide"].map((type) => (
                  <button
                    key={type}
                    className={articleType === type ? "selected" : ""}
                    onClick={() => setArticleType(type)}
                  >
                    {type}
                    <small>
                      {type === "Article"
                        ? "In-depth"
                        : type === "Essay"
                        ? "Personal"
                        : "How-to"}
                    </small>
                  </button>
                ))}
              </div>

              <label className="comments-setting">
                <span>Allow Comments</span>
                <input
                  type="checkbox"
                  checked={comments}
                  onChange={(e) => setComments(e.target.checked)}
                />
              </label>
            </>
          )}

          {activeTab === "SEO" && (
            <div className="settings-section">
              <label>SEO Title</label>
              <input
                placeholder="Search engine title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <label>Meta Description</label>
              <textarea placeholder="Describe your article..." />
            </div>
          )}

          {activeTab === "Advanced" && (
            <div className="settings-section">
              <label>Article Visibility</label>
              <select>
                <option>Public</option>
                <option>Subscribers Only</option>
                <option>Premium Only</option>
                <option>Private</option>
              </select>

              <label>Article URL</label>
              <input placeholder="your-article-url" />

              <p>Article Type: {articleType}</p>
              <p>Comments: {comments ? "Enabled" : "Disabled"}</p>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

export default Write;
