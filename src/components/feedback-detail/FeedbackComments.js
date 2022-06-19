import React from 'react';
import styled from 'styled-components';
import { breakpoints, misc } from '../../styles';
import Comment from './Comment';

const FeedbackComments = ({ comments }) => {
   return (
      <FeedbackCommentsWrap>
         <h2>
            {!comments
               ? `0 comments`
               : comments?.length === 1
               ? `${comments.length} comment`
               : `${comments.length} comments`}
         </h2>
         {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
         ))}
      </FeedbackCommentsWrap>
   );
};

export default FeedbackComments;

const FeedbackCommentsWrap = styled.div`
   background-color: ${(props) => props.theme.white};
   border-radius: ${misc.rounded.sm};
   padding: 2rem;

   h2 {
      text-transform: capitalize;
   }
`;
