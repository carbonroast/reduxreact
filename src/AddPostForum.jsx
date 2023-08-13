import {useState} from "react"
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./features/postSlice";

const AddPostForum = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('init');
    const [content, setContent] = useState('init');

    const onTitleChanged = (e) => {
        setTitle(e.target.value);
    };
    const onContentChanged = (e) => {
        setContent(e.target.value);
    };

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content)
            )

            setTitle('reset')
            setContent('reset')
        }
    }

    return (
        <section>
            <h2>Add New Post</h2>
            <form>
                <label htmlFor="postTitle">Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button type="button" onClick={onSavePostClicked}>Save</button>
            </form>
        </section>
    )
}

export default AddPostForum