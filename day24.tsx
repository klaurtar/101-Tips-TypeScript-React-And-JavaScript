import { useRef } from 'react';

interface PostRef {
  scrollAndFocusAddComment(): void;
}

const Page: React.FC = () => {
  const postRef = useRef<PostRef>(null);

  const handleClick = () => {
    postRef.current?.scrollAndFocusAddComment();
  };

  return (
    <>
      <button onClick={handleClick}>Write a comment</button>
      <Post ref={postRef} />
    </>
  );
};

// =======================Post.tsx==========================

import { forwardRef, useRef, useImperativeHandle } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';

interface CommentRef extends HTMLDivElement {
  scrollToBottom(): void;
}

const Post: React.FC<{ ref: React.RefObject<PostRef> }> = forwardRef(
  (props, ref) => {
    const commentsRef = useRef<CommentRef>(null);
    const addCommentsRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(
      ref,
      () => {
        return {
          scrollAndFocusAddComment() {
            commentsRef.current?.scrollToBottom();
            addCommentsRef.current?.focus();
          },
        };
      },
      []
    );

    return (
      <>
        <article>
          <p>Welcome to my blog!</p>
          <CommentList ref={commentsRef} />
          <AddComment ref={addCommentsRef} />
        </article>
      </>
    );
  }
);

export default Post;
