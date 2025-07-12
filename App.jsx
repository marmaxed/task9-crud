import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './pages/PostList';
import PostView from './pages/PostView';
import PostEdit from './pages/PostEdit';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/new" element={<PostEdit isNew />} />
        <Route path="/posts/:id" element={<PostView />} />
        <Route path="/posts/:id/edit" element={<PostEdit />} />
      </Routes>
    </Router>
  );
}