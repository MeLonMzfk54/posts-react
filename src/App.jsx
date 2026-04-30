import './App.css'
import Header from "./components/Header.jsx";
import Posts from "./components/Posts.jsx";

function App() {

  return <div className="app">
    <Header />
    <main className="main">
      <Posts />
    </main>
  </div>
}

export default App
