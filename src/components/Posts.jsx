
function Posts() {
    return (
        <div className='post'>
            <div className="image">
                <img src="src\assets\example.jpg" alt="" />
            </div>
            <div className="content">
                <h2>Example post</h2>
                <p className="info">
                    <a href="" className="author">Leonardo</a>
                    <time>April 19, 2024 17:10</time>
                </p>
                <p className="summary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta facilis quis hic. Atque exercitationem maxime, autem amet dolore vitae numquam fuga placeat ut distinctio necessitatibus culpa pariatur dolor quia possimus.</p>
            </div>
        </div>

    )
}

export default Posts