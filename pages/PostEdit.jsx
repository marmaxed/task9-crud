import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PostForm from '../components/PostForm';

export default function PostEdit({ isNew }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initial, setInitial] = useState('');

  useEffect(() => {
    if (!isNew && id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(post => setInitial(post.body));
    }
  }, [id, isNew]);

  const handleSave = (content) => {
    const method = isNew ? 'POST' : 'PUT';
    const url = isNew
      ? 'https://jsonplaceholder.typicode.com/posts'
      : `https://jsonplaceholder.typicode.com/posts/${id}`;

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: isNew ? 0 : Number(id),
        title: 'Заглушка',
        body: content,
        userId: 1,
      }),
    }).then(() => navigate('/'));
  };

  const handleCancel = () => {
    navigate(isNew ? '/' : `/posts/${id}`);
  };

  return (
    <div>
      <h2>{isNew ? 'Новый пост' : 'Редактирование'}</h2>
      <PostForm onSave={handleSave} onCancel={handleCancel} initialContent={initial} />
    </div>
  );
}