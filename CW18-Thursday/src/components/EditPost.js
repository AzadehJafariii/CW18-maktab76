import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3001/posts";

const EditPost = () => {
  const navigate = useNavigate();
  const [selectedPost, setSelectedPost] = useState({
    PostTitle: "",
    Content: "",
  });
  const { PostTitle, Content } = selectedPost;
  const { postId } = useParams();

  useEffect(() => {
    fetch(`${API_URL}/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedPost(data);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedPost({ ...selectedPost, [name]: value });
  };

  const EditPost = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(selectedPost),
    };
    fetch(`${API_URL}/${postId}`, requestOptions)
      .then((response) => response.json())
      .then(() => navigate(`/${postId}`));
  };
  return (
    <>
      <h4 class="ms-5 mt-5 fs-2 fw-bold">Edit Post</h4>
      <form onSubmit={(e) => EditPost(e)} className="w-50">
        <div class="my-3 ms-5">
          <label for="exampleFormControlInput1" class="form-label fs-5 fw-bold">
            Post Title:
          </label>
          <input
            class="form-control"
            id="exampleFormControlInput1"
            type="text"
            name="PostTitle"
            value={PostTitle}
            placeholder="What's on your mind?"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div class="my-3 ms-5">
          <label
            for="exampleFormControlTextarea1"
            class="form-label fs-5 fw-bold"
          >
            Content
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={Content}
            name="Content"
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>
        <div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary my-3 ms-5">
              Save Post
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditPost;
