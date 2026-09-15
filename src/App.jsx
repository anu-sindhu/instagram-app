import { useState } from "react";

const posts = [
  {
    id: 1,
    user: "alex",
    avatar: "https://i.pravatar.cc/150?img=12",
    image: "https://picsum.photos/id/1015/700/700",
    caption: "Beautiful day 🌄",
    likes: 124,
    comments: 12,
  },
  {
    id: 2,
    user: "sarah",
    avatar: "https://i.pravatar.cc/150?img=32",
    image: "https://picsum.photos/id/1011/700/700",
    caption: "Exploring new places ✨",
    likes: 238,
    comments: 27,
  },
  {
    id: 3,
    user: "mike",
    avatar: "https://i.pravatar.cc/150?img=68",
    image: "https://picsum.photos/id/1025/700/700",
    caption: "Weekend vibes 🐶",
    likes: 91,
    comments: 8,
  },
];

const stories = [
  ["Your story", "https://i.pravatar.cc/150?img=5"],
  ["alex", "https://i.pravatar.cc/150?img=12"],
  ["sarah", "https://i.pravatar.cc/150?img=32"],
  ["mike", "https://i.pravatar.cc/150?img=68"],
  ["julia", "https://i.pravatar.cc/150?img=44"],
];

function App() {
  const [activePage, setActivePage] = useState("Home");
  const [liked, setLiked] = useState({});
  const [saved, setSaved] = useState({});
  const [dark, setDark] = useState(false);
  const [search, setSearch] = useState("");

  const toggleLike = (id) => {
    setLiked((old) => ({
      ...old,
      [id]: !old[id],
    }));
  };

  const toggleSave = (id) => {
    setSaved((old) => ({
      ...old,
      [id]: !old[id],
    }));
  };

  return (
    <div className={dark ? "app dark" : "app"}>
      <nav className="navbar">
        <div className="logo">Instagram</div>

        <input
          className="search"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="nav-icons">
          <button onClick={() => setActivePage("Home")}>⌂</button>
          <button onClick={() => setActivePage("Messages")}>✈</button>
          <button onClick={() => setActivePage("Create")}>＋</button>
          <button onClick={() => setDark(!dark)}>◐</button>
        </div>
      </nav>

      <div className="layout">
        <aside className="sidebar">
          {[
            ["⌂", "Home"],
            ["⌕", "Search"],
            ["▣", "Explore"],
            ["▶", "Reels"],
            ["✈", "Messages"],
            ["♡", "Notifications"],
            ["＋", "Create"],
            ["☻", "Profile"],
          ].map(([icon, name]) => (
            <button
              key={name}
              className={activePage === name ? "active" : ""}
              onClick={() => setActivePage(name)}
            >
              <span>{icon}</span>
              {name}
            </button>
          ))}
        </aside>

        <main className="main">
          {activePage === "Home" && (
            <>
              <section className="stories">
                {stories.map(([name, avatar]) => (
                  <div className="story" key={name}>
                    <img src={avatar} alt={name} />
                    <span>{name}</span>
                  </div>
                ))}
              </section>

              <section className="feed">
                {posts
                  .filter((post) =>
                    post.user.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((post) => (
                    <article className="post" key={post.id}>
                      <header className="post-header">
                        <div className="user">
                          <img src={post.avatar} alt={post.user} />
                          <strong>{post.user}</strong>
                        </div>
                        <button>•••</button>
                      </header>

                      <img
                        className="post-image"
                        src={post.image}
                        alt="Post"
                      />

                      <div className="actions">
                        <div>
                          <button
                            className={liked[post.id] ? "liked" : ""}
                            onClick={() => toggleLike(post.id)}
                          >
                            {liked[post.id] ? "♥" : "♡"}
                          </button>

                          <button>💬</button>
                          <button>✈</button>
                        </div>

                        <button onClick={() => toggleSave(post.id)}>
                          {saved[post.id] ? "🔖" : "♧"}
                        </button>
                      </div>

                      <div className="post-content">
                        <strong>
                          {post.likes + (liked[post.id] ? 1 : 0)} likes
                        </strong>

                        <p>
                          <strong>{post.user}</strong> {post.caption}
                        </p>

                        <span className="comments">
                          View all {post.comments} comments
                        </span>

                        <input
                          className="comment-input"
                          placeholder="Add a comment..."
                        />
                      </div>
                    </article>
                  ))}
              </section>
            </>
          )}

          {activePage === "Explore" && (
            <section className="page">
              <h1>Explore</h1>
              <div className="grid">
                {Array.from({ length: 12 }, (_, i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/id/${i + 30}/500/500`}
                    alt="Explore"
                  />
                ))}
              </div>
            </section>
          )}

          {activePage === "Reels" && (
            <section className="page center">
              <div className="reel">
                <div className="reel-screen">
                  <span>▶</span>
                </div>
                <h2>Reels</h2>
                <p>Short videos would appear here.</p>
              </div>
            </section>
          )}

          {activePage === "Messages" && (
            <section className="page messages">
              <h1>Messages</h1>

              {["alex", "sarah", "julia", "mike"].map((user, i) => (
                <div className="message" key={user}>
                  <img
                    src={`https://i.pravatar.cc/100?img=${12 + i * 10}`}
                    alt={user}
                  />
                  <div>
                    <strong>{user}</strong>
                    <p>Sent you a message</p>
                  </div>
                </div>
              ))}
            </section>
          )}

          {activePage === "Profile" && (
            <section className="profile">
              <div className="profile-top">
                <img
                  src="https://i.pravatar.cc/200?img=5"
                  alt="Profile"
                />

                <div>
                  <h1>your_username</h1>
                  <button className="edit">Edit profile</button>

                  <div className="stats">
                    <span><b>24</b> posts</span>
                    <span><b>1.2K</b> followers</span>
                    <span><b>350</b> following</span>
                  </div>

                  <p>
                    <strong>Your Name</strong><br />
                    Welcome to my Instagram profile ✨
                  </p>
                </div>
              </div>

              <div className="grid">
                {posts.map((post) => (
                  <img key={post.id} src={post.image} alt="Post" />
                ))}
              </div>
            </section>
          )}

          {activePage === "Create" && (
            <section className="page create">
              <h1>Create new post</h1>
              <div className="upload">
                <div className="upload-icon">＋</div>
                <h2>Drag photos here</h2>
                <button>Select from computer</button>
              </div>
            </section>
          )}

          {activePage === "Notifications" && (
            <section className="page">
              <h1>Notifications</h1>
              <div className="notification">❤️ alex liked your post</div>
              <div className="notification">👤 sarah started following you</div>
              <div className="notification">💬 mike commented on your post</div>
            </section>
          )}

          {activePage === "Search" && (
            <section className="page">
              <h1>Search</h1>
              <input
                className="large-search"
                placeholder="Search people..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <div className="search-results">
                {["alex", "sarah", "mike", "julia"].map((user) => (
                  <div key={user}>
                    <img
                      src={`https://i.pravatar.cc/100?u=${user}`}
                      alt={user}
                    />
                    <strong>{user}</strong>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;