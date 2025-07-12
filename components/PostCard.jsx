import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <div>
      <p>{post.body}</p>
      <Link to={`/posts/${post.id}`}>Читать далее</Link>
    </div>
  );
}