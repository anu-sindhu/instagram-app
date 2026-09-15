import { useState } from "react";

function Post({ username, avatar, image, caption }) {

  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(120);

  const handleLike = () => {
    setLiked(!liked);

    setLikes(
      liked ? likes - 1 : likes + 1
    );
  };

  return (
    <article className="post">

      <div className="post-header">

        <img
          src={avatar}
          alt={username}
        />

        <strong>{username}</strong>

        <span className="more">•••</span>

      </div>

      <img
        className="post-image"
        src={image}
        alt="Instagram post"
      />

      <div className="post-actions">

        <button onClick={handleLike}>
          {liked ? "❤️" : "♡"}
        </button>

        <button>💬</button>

        <button>📤</button>

        <button className="save">
          🔖
        </button>

      </div>

      <div className="post-info">

        <strong>{likes} likes</strong>

        <p>
          <strong>{username}</strong>{" "}
          {caption}
        </p>

        <p className="comments">
          View all comments
        </p>

      </div>

    </article>
  );
}

export default Post;