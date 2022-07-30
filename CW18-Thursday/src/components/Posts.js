import { Link } from "react-router-dom";
const Posts = ({ data }) => {
  return (
    <>
      <h4 className="fs-2 fw-bold mt-5 mb-3 ms-5">Posts</h4>
      {data.map((post) => (
        // for showing data from API
        <div className="ms-5 my-3 w-50 border p-3 rounded-2" key={post.id}>
          <h2>{post.PostTitle}</h2>
          <small>{post.Author}</small>
          <p>{`${post.Content.substring(0, 80)}...`}</p>
          <Link to={`${post.id}`}>View Post</Link>
        </div>
      ))}
    </>
  );
};

export default Posts;
