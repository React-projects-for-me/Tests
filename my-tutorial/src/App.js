import { React, useState } from "react";
import PostList from "./components/postList.jsx";
import './styles/app.css'
import PostForm from "./components/postForm.jsx";
import MySelect from "./components/UI/select/MySelect/MySelect.jsx";



function App() {
  const [posts, setPosts] = useState(
    [
      { id: 1, tittle: 'xello world', body: 'aescription' },
      { id: 2, tittle: 'zello world', body: 'bescription' },
      { id: 3, tittle: 'hvello ', body: 'cescription' },
      { id: 4, tittle: ' lworld', body: 'description' },
      { id: 5, tittle: 'Hello world', body: 'Description' },
      { id: 6, tittle: 'Hello world', body: 'Description' },
    ]
  );

  const sortingOptions = [
    { value: 'tittle', name: 'Sorting by tittle' },
    { value: 'body', name: 'Sorting by body' }
  ]
  const [selectedSort, setSelectedSort] = useState('');


  function createPost(newPost) {
    setPosts([...posts, newPost])
  }

  function removePost(post) {
    setPosts(posts.filter(n => n.id !== post.id))
  }
  const sortPost = (sort) => {
    console.log(sort);
    const sortedPosts = [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    setSelectedSort(sortedPosts);
  };
  

  return (
    <div className="App">
      <h1>THIS IS MAIN COMPONENTS</h1>
      <PostForm
        create={createPost}
      />
      <hr></hr>
      <MySelect
        defaultValue='Sorting by'
        options={sortingOptions}
        value={selectedSort}
        onChange={sortPost}
      />
      {posts.length !== 0
        ? <PostList
          remove={removePost}
          posts={posts}
        />
        : <h1>There are no posts avaible</h1>
      }


    </div>
  );
}

export default App;
