import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import EditPost from "./components/EditPost";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":postId" element={<Post />} />
        <Route path=":postId/editpost" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
