import PostCard from "./PostCard.jsx";
import {useEffect, useState} from "react";

const postsData = [
    {
        id: 1,
        title: 'Первый пост',
        body: 'Описание поста',
    },
    {
        id: 2,
        title: 'Второй пост',
        body: 'Описание поста',
    },
    {
        id: 3,
        title: 'Третий пост',
        body: 'Описание поста',
    }
]

const emptyPostsStyles = {marginTop: '1rem', color: '#888'}

const Posts = () => {
    const title = 'Добро пожаловать сюда'

    const [search, setSearch] = useState('')

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         console.log('tick')
    //     }, 1000)
    //
    //     return () => {
    //         clearInterval(timer)
    //     }
    // }, [])

    // const cardsRenderUi = postsData && postsData.length ? postsData.map(post => (
    //     <PostCard
    //         key={post.id}
    //         title={post.title}
    //         body={post.body}
    //     />
    // )) : <p style={emptyPostsStyles}>Постов нет</p>

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
                { postsData && postsData.length ? postsData.map(post => (
                    <PostCard
                        key={post.id}
                        title={post.title}
                        body={post.body}
                        setSearch={setSearch}
                    />
                )) : <p style={emptyPostsStyles}>Постов нет</p>}
            </section>
        </div>
    )
}

export default Posts;