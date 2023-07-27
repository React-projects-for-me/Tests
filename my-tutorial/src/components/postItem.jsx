import React from 'react';
import  '../styles/postItem.css'
import MyButton from './UI/button/MyButton';

const PostItem = (props) => {
    console.log(props);
        return (
            <div className='post-item'>
                <strong>{props.post.id}) {props.post.tittle}</strong>
                <div>{props.post.body}</div>
                <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
            </div>
        );

}

export default PostItem;
