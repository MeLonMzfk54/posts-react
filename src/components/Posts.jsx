const Posts = () => {
    const title = 'Добро пожаловать сюда'
    return (
        <div className='container'>
            <h2 className='main-title'>{title}</h2>

            <input type="text" placeholder='Поиск поста' className='search-input' />

            <section className='posts'>
                <article className='post-card'>
                    <h3>Первый пост</h3>
                    <p>Описание поста.</p>
                    <a href="#">Открыть пост</a>
                </article>

                <article className='post-card'>
                    <h3>Второй пост</h3>
                    <p>Описание поста.</p>
                    <a href="#">Открыть пост</a>
                </article>

                <article className='post-card'>
                    <h3>Третий пост</h3>
                    <p>Описание поста.</p>
                    <a href="#">Открыть пост</a>
                </article>
            </section>
        </div>
    )
}

export default Posts;