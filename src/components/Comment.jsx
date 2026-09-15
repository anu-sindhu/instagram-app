function Comment({ username, text }) {
  return (
    <div className="comment">
      <strong>{username}</strong>
      <span>{text}</span>
    </div>
  );
}

export default Comment;