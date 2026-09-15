import { useState } from "react";

function Create() {

  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const handleImage = (event) => {

    const file = event.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (event) => {

    event.preventDefault();

    alert("Post created successfully!");

    setImage(null);
    setCaption("");
  };

  return (
    <div className="create">

      <h2>Create New Post</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
        />

        {image && (
          <img
            className="preview"
            src={image}
            alt="Preview"
          />
        )}

        <textarea
          placeholder="Write a caption..."
          value={caption}
          onChange={(e) =>
            setCaption(e.target.value)
          }
        />

        <button type="submit">
          Share
        </button>

      </form>

    </div>
  );
}

export default Create;