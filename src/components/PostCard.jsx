const PostCard = ({title, body}) => {
    // const { title, body } = props;
    return (
        <article className='post-card'>
            <h3>{title}</h3>
            <p>{body}</p>
            <a href="#">Открыть пост</a>
        </article>
    )
}

export default PostCard;