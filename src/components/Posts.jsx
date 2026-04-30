import PostCard from "./PostCard.jsx";
import {useEffect, useState} from "react";

const emptyPostsStyles = {marginTop: '1rem', color: '#888'}

const Posts = () => {
    const title = 'Добро пожаловать сюда'

    const [search, setSearch] = useState('');
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         console.log('tick')
    //     }, 1000)
    //
    //     return () => {
    //         clearInterval(timer)
    //     }
    // }, [])

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                setError('');
                const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!res.ok) throw new Error('Error fetching posts');
                const data = await res.json();

                setPosts(data);
            } catch(e) {
                setError(e.message || 'error on fetch posts');
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, [])

    // const cardsRenderUi = postsData && postsData.length ? postsData.map(post => (
    //     <PostCard
    //         key={post.id}
    //         title={post.title}
    //         body={post.body}
    //     />
    // )) : <p style={emptyPostsStyles}>Постов нет</p>
    if (error) return <p style={{color: 'red'}}>{error}</p>;
    return (
        <div className='container'>
            <h2 className='main-title'>{title}</h2>

            <input
                type="text"
                placeholder='Поиск поста'
                className='search-input'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <section className='posts'>
                {posts.length === 0 && !loading && (
                    <p style={emptyPostsStyles}>Постов нет</p>
                )}

                { !loading ? posts.map(post => (
                    <PostCard
                        key={post.id}
                        post={post}
                        setSearch={setSearch}
                    />
                )) : <p>Загрузка постов...</p>}
            </section>
        </div>
    )
}

export default Posts;