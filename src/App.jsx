import './App.css'

function App() {
  const title = 'Добро пожаловать сюда'

  return <div className="app">
    <header className="header">
      <div className="container header-inner">
        <h1 className='logo'>Logo</h1>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Posts</a>
          <a href="#">About</a>
          <a href="#">Submit posts</a>
        </nav>
        <button>Dark Mode</button>
      </div>
    </header>

    <main className="main">
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
    </main>
  </div>
}

export default App
