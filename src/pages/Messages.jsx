function Messages() {
  const users = [
    ["Alex", "Hey! How are you?"],
    ["Sarah", "That photo looks great!"],
    ["John", "See you tomorrow!"],
    ["Emma", "Hello 👋"]
  ];

  return (
    <div className="messages">

      <h1>Messages</h1>

      {users.map(([name, message]) => (
        <div className="message" key={name}>

          <img
            src={`https://i.pravatar.cc/100?u=${name}`}
            alt={name}
          />

          <div>
            <strong>{name}</strong>
            <p>{message}</p>
          </div>

        </div>
      ))}

    </div>
  );
}

export default Messages;