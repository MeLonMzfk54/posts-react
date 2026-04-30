const PostCard = ({post, setSearch}) => {
    // const { title, body } = props;
    return (
        <article className='post-card'>
            <h3 onClick={() => setSearch(post.title)}>{post.title}</h3>
            <p>{post.body}</p>
            <a href="#">Открыть пост</a>
        </article>
    )
}

export default PostCard;