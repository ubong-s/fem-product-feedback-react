import styled from 'styled-components';
import { breakpoints, misc } from '../../styles';

const AddComment = () => {
   return (
      <AddCommentWrap>
         <h2>Add Comment</h2>
      </AddCommentWrap>
   );
};

export default AddComment;

const AddCommentWrap = styled.div`
   background-color: ${(props) => props.theme.white};
   border-radius: ${misc.rounded.sm};
   padding: 2rem;

   h2 {
      text-transform: capitalize;
   }
`;
