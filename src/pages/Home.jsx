import Stories from "../components/Stories";
import Post from "../components/Post";

function Home() {

  const posts = [
    {
      username: "alex",
      avatar: "https://i.pravatar.cc/100?img=1",
      image: "https://picsum.photos/id/1015/600/600",
      caption: "Beautiful day 🌄"
    },
    {
      username: "sarah",
      avatar: "https://i.pravatar.cc/100?img=2",
      image: "https://picsum.photos/id/1016/600/600",
      caption: "Exploring new places ✨"
    },
    {
      username: "john",
      avatar: "https://i.pravatar.cc/100?img=3",
      image: "https://picsum.photos/id/1025/600/600",
      caption: "Weekend vibes ❤️"
    }
  ];

  return (
    <div className="home">

      <Stories />

      <div className="feed">

        {posts.map((post) => (
          <Post
            key={post.username}
            {...post}
          />
        ))}

      </div>

    </div>
  );
}

export default Home;