import { COMMENT_CREATE, COMMENT_UPDATE } from './types';

const initialState = {
  comments: [],
};
export const commentsReducer = (state = initialState, action) => {
  console.log('commentsReducer>', action);

  switch (action.type) {
    case COMMENT_CREATE:
      return {
        ...state,
        comments: [...state.comments, action.data],
      };
    case COMMENT_UPDATE:
      const { date } = action;
      const { comments } = state;
      const itemIndex = comments.findIndex((res) => res.id === date.id);
      const nextComments = [
        ...comments.slice(0, itemIndex),
        date,
        ...comments.slice(itemIndex + 1),
      ];
      return {
        ...state,
        comments: nextComments,
      };
    default:
      return state;
  }
};
