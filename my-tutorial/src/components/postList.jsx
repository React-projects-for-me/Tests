import React from "react";
import PostItem from "./postItem.jsx";

const PostList = ({posts,remove}) => {
  console.log(posts);
  return (
    <div>
      {posts.map((post) => {
        return <PostItem remove={remove} post={post} key={post.id} />;
      })}
    </div>
  );
};

export default PostList;
