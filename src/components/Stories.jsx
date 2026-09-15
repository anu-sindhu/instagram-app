const stories = [
  {
    username: "alex",
    image: "https://i.pravatar.cc/100?img=1"
  },
  {
    username: "sarah",
    image: "https://i.pravatar.cc/100?img=2"
  },
  {
    username: "john",
    image: "https://i.pravatar.cc/100?img=3"
  },
  {
    username: "emma",
    image: "https://i.pravatar.cc/100?img=4"
  },
  {
    username: "mike",
    image: "https://i.pravatar.cc/100?img=5"
  },
  {
    username: "lisa",
    image: "https://i.pravatar.cc/100?img=6"
  }
];

function Stories() {
  return (
    <div className="stories">

      {stories.map((story) => (
        <div className="story" key={story.username}>

          <img
            src={story.image}
            alt={story.username}
          />

          <p>{story.username}</p>

        </div>
      ))}

    </div>
  );
}

export default Stories;