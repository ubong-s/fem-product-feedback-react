import styled from 'styled-components';
import { breakpoints, misc } from '../../styles';

const AddComment = () => {
   return (
      <AddCommentWrap>
         <h2>Add Comment</h2>
         <Form>
            <textarea
               name=''
               id=''
               placeholder='Type your comment here'
            ></textarea>
            <div className='form-footer'>
               <p>255 characters left</p>
               <button type='submit' className='btn add-btn'>
                  Post Comment
               </button>
            </div>
         </Form>
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
      margin-bottom: 2rem;
   }
`;

const Form = styled.form`
   display: grid;
   gap: 2rem;

   textarea {
      width: 100%;
      height: 150px;
      padding: 1.5rem;
      border: transparent;
      background: ${(props) => props.theme.grey_light};
      border-radius: ${misc.rounded.sm};
      outline: transparent;
      font-size: 1rem;
      color: ${(props) => props.theme.grey_dark};

      &::placeholder {
         font-size: 1rem;
         color: ${(props) => props.theme.grey_dark};
      }
   }

   .form-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
         margin-bottom: 0;
      }
   }
`;
