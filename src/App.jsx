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
        <p>Здесь будет контент блин</p>
      </div>
    </main>
  </div>
}

export default App
