import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
const API_URL = "http://localhost:3001/posts";

const Post = () => {
  const { postId } = useParams();
  const [singlePost, setSinglePost] = useState({});
  useEffect(() => {
    fetch(`${API_URL}/${postId}`)
      .then((res) => res.json())
      .then((result) => {
        setSinglePost(result);
      });
  }, []);

  return (
    <>
      <div className="ms-5 my-5 p-3 w-50 border border-secondary rounded-2">
        <h2>{singlePost.PostTitle}</h2>
        <small>{singlePost.Author}</small>
        <p>{singlePost.Content}</p>
        <Link to={`editpost`}>Edit Post</Link>
        <p></p>
        <Link to={"/"}>Back To Home Page</Link>
      </div>
    </>
  );
};

export default Post;
