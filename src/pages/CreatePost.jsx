import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { useState } from "react";

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
    ],
};
const formats = {
    formats: [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ],
};
function CreatePost() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState(null);

    function handleFileChange(event) {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    }

    function newPost(e) {
        e.preventDefault();

        const data = new FormData();
        data.append('title', title);
        data.append('summary', summary);
        data.append('content', content);
        data.append('file', file);

        try {
            fetch('/post', {
                method: 'POST',
                body: data
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    // Handle successful response
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error.message);
                });
        } catch (error) {
            console.error('An error occurred:', error.message);
        }
    }

    return (
        <form onSubmit={newPost}>
            <input
                type="title"
                placeholder="Title"
                value={title}
                onChange={newValue => setTitle(newValue.target.value)} />
            <input
                type="summary"
                placeholder="Summary"
                value={summary}
                onChange={e => setSummary(e.target.value)} />
            <input
                type="file"
                onChange={handleFileChange} />
            <ReactQuill
                value={content}
                onChange={e => setContent(e)}
                modules={modules}
                formats={formats} />
            <button type="submit">Create post</button>
        </form>
    )
}

export default CreatePost;
