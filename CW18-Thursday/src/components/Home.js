import { useState, useEffect } from "react";
import Posts from "./Posts";
const API_URL = "http://localhost:3001/posts";

const Home = () => {
  const [data, setData] = useState([]);
  const [titleValue, setTitleValue] = useState("");
  const [authorValue, setAuthorValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  function getData() {
    fetch(API_URL)
      .then((res) => res.json())
      .then((result) => setData(result));
  }
  useEffect(() => {
    getData();
  }, []);

  const addPost = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const newPost = Object.fromEntries(form);
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    }).then(() => getData());
    setTitleValue("");
    setAuthorValue("");
    setContentValue("");
  };

  return (
    <>
      <h4 className="my-5 ms-5 fs-2 fw-bold">Add a New Post</h4>
      <form onSubmit={addPost} className="w-50">
        <div className="my-3 ms-5">
          <label
            for="exampleFormControlInput1"
            className="form-label fs-5 fw-bold"
          >
            Post Title:
          </label>
          <input
            className="form-control"
            id="exampleFormControlInput1"
            type="text"
            name="PostTitle"
            value={titleValue}
            placeholder="What's on your mind?"
            onChange={(e) => setTitleValue(e.target.value)}
          />
        </div>
        <div className="my-3 ms-5">
          <label className="form-label fs-5 fw-bold">Author</label>
          <select
            className="form-select"
            aria-label="Default select example"
            name="Author"
            value={authorValue}
            onChange={(e) => setAuthorValue(e.target.value)}
          >
            <option></option>
            <option value={"Michel"}>Michel</option>
            <option value={"John"}>John</option>
          </select>
        </div>
        <div className="my-3 ms-5">
          <label
            for="exampleFormControlTextarea1"
            className="form-label fs-5 fw-bold"
          >
            Content
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="Content"
            value={contentValue}
            onChange={(e) => setContentValue(e.target.value)}
          ></textarea>
        </div>
        <div>
          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-primary my-3 ms-5"
              disabled={!titleValue || !authorValue || !contentValue}
            >
              Save Post
            </button>
          </div>
        </div>
      </form>

      <Posts data={data} />
    </>
  );
};

export default Home;
