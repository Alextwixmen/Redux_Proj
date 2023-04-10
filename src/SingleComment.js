import { useState, useEffect } from 'react';
import { commentUpdate } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';
function SingleComment({ data }) {
  const [commentText, setCommentText] = useState('');
  const { text, id } = data;
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log('submit =>>>', commentText);
    dispatch(commentUpdate(commentText, id));
  };

  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);
  const handleInput = (e) => {
    setCommentText(e.target.value);
    console.log('commentText >>', commentText);
  };
  return (
    <form className='comments-item' onSubmit={handleUpdate}>
      <div className='comments-item-delete'>&times;</div>
      <input type='text' value={commentText} onChange={handleInput} />
      <input type='submit' hidden />
    </form>
  );
}

export default SingleComment;
