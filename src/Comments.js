import SingleComment from './SingleComment';
import { useState } from 'react';
import { commentCreate } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';

function Comments(props) {
  const [textComment, setTextComment] = useState('');
  const comments = useSelector((state) => {
    // console.log('redux state>>>', state);
    const { commentsReducer } = state;
    return commentsReducer.comments;
  });
  // console.log('comments>', comments);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit text comment', textComment);
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
  };

  console.log('COMMENTS >>', comments);

  return (
    <div className='card-comments'>
      <form className='comments-item-create' onSubmit={handleSubmit}>
        <input type='text' value={textComment} onChange={handleInput} />
        <input type='submit' hidden />
      </form>
      {!!comments.length &&
        comments.map((res) => {
          return <SingleComment key={res.id} data={res} />;
        })}
    </div>
  );
}

export default Comments;
