import { useState } from "preact/hooks";

export default function LikeButton() {
  const [liked, setIsLiked] = useState(false);
  
  const toggleLike = () => {
    setIsLiked(!liked);
  };
 let likestyle= {
    color: liked ? 'red' : 'black',
    fontSize: '24px'
  };
  return (
    <div>
      <h1>Like Button</h1>
      <button onClick={toggleLike}>
        {liked ? <i class="fa-solid fa-heart" style={likestyle}></i> : <i class="fa-regular fa-heart"></i>}
      </button>
    </div>
  );
}

