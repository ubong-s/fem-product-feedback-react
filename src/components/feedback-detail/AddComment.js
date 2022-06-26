import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addNewComment } from '../../redux/features/product-requests/productRequestsSlice';
import { misc } from '../../styles';

const AddComment = ({ feedbackId }) => {
   const { currentUser: user } = useSelector((state) => state.user);
   const dispatch = useDispatch();
   let charctersAllowed = 250;

   const formik = useFormik({
      initialValues: {
         content: '',
      },
      onSubmit: (values, { resetForm }) => {
         dispatch(
            addNewComment({
               feedbackId,
               user,
               commentId: new Date().getTime(),
               ...values,
            })
         );
         resetForm({ values: '' });
      },
   });

   return (
      <AddCommentWrap>
         <h2>Add Comment</h2>
         <Form onSubmit={formik.handleSubmit}>
            <textarea
               aria-label='content'
               name='content'
               placeholder='Type your comment here'
               value={formik.values.content}
               maxLength={charctersAllowed}
               onChange={formik.handleChange}
            />
            <div className='form-footer'>
               <p
                  className={
                     formik.values.content.length === charctersAllowed
                        ? 'limit'
                        : null
                  }
               >
                  {charctersAllowed - formik.values.content.length} characters
                  left
               </p>
               <button
                  type='submit'
                  disabled={!formik.values.content}
                  className='btn add-btn'
               >
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

   .error-msg {
      color: ${(props) => props.theme.red};
      font-style: italic;
   }

   .form-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 2rem;

      button {
         &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
         }
      }

      p {
         margin-bottom: 0;

         &.limit {
            color: red;
         }
      }
   }
`;
