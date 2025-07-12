import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

export default function PostView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(setPost);
  }, [id]);

  const handleDelete = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    }).then(() => navigate('/'));
  };

  if (!post) return <p>Загрузка...</p>;

  return (
    <div>
      <h2>Просмотр поста</h2>
      <p>{post.body}</p>
      <button onClick={handleDelete}>Удалить</button>
      <Link to={`/posts/${id}/edit`}><button>Редактировать</button></Link>
    </div>
  );
}
