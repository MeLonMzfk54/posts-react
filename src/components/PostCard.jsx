const PostCard = ({title, body, setSearch}) => {
    // const { title, body } = props;
    return (
        <article className='post-card'>
            <h3 onClick={() => setSearch(title)}>{title}</h3>
            <p>{body}</p>
            <a href="#">Открыть пост</a>
        </article>
    )
}

export default PostCard;