import { useState } from "react";

function Card({ title }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="card">
      <h2>{title}</h2>
      <p className={liked ? "liked" : "notliked"}>{liked ? "Liked" : "Not Liked"}</p>
      <button onClick={() => setLiked(!liked)}>{liked ? "Unlike" : "Like"}</button>
    </div>
  );
}
export default Card;
