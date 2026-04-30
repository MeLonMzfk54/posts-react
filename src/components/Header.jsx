const Header = () => {
    return (
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
    )
}

export default Header;