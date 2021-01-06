import './App.css';
import Posts from './components/Posts';
import PostForm from './components/PostForm';

function App() {
  return (
    <div className="App">
      <div className="form">
        <PostForm />
      </div>
      <div className="posts">
        <Posts/>
      </div>

      <div className="fetched-posts">
        fetched
      </div>
    </div>
  );
}

export default App;
