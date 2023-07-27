import {React,useState} from "react";
import  MyButton  from "../components/UI/button/MyButton.jsx";
import  MyInput  from "../components/UI/input/MyInput.jsx";

const PostForm = ({create}) => {
  const [post, setPost] = useState({
    tittle: "",
    description: "",
  });

  function addNewPost(e) {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    console.log(newPost);
    setPost({ tittle: "", description: "" });
  }

  return (
    <div>
      <form>
        <MyInput
          value={post.tittle}
          type="text"
          placeholder="Post name"
          onChange={(e) => setPost({ ...post, tittle: e.target.value })}
        />
        <MyInput
          value={post.description}
          type="text"
          placeholder="Post description"
          onChange={(e) => setPost({ ...post, description: e.target.value })}
        />
        <MyButton onClick={addNewPost} tittle={"Confirm"} />
      </form>
    </div>
  );
};

export default PostForm;
