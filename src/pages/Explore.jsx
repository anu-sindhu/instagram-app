const images = [
  "https://picsum.photos/id/10/500/500",
  "https://picsum.photos/id/20/500/500",
  "https://picsum.photos/id/30/500/500",
  "https://picsum.photos/id/40/500/500",
  "https://picsum.photos/id/50/500/500",
  "https://picsum.photos/id/60/500/500",
  "https://picsum.photos/id/70/500/500",
  "https://picsum.photos/id/80/500/500",
  "https://picsum.photos/id/90/500/500"
];

function Explore() {
  return (
    <div className="explore">

      <h2>Explore</h2>

      <div className="explore-grid">

        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Explore ${index + 1}`}
          />
        ))}

      </div>

    </div>
  );
}

export default Explore;