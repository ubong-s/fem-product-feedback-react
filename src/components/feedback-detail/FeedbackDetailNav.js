import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BackBtn } from '../shared';
import { useDispatch } from 'react-redux';
import { updateEditForm } from '../../redux/features/forms/editFormsSlice';

const FeedbackDetailNav = ({ id, title, description, status, category }) => {
   const dispatch = useDispatch();

   return (
      <FeedbackDetailNavWrap>
         <BackBtn />
         <Link
            to={`/feedback/edit-feedback/${id}`}
            onClick={() =>
               dispatch(
                  updateEditForm({
                     title,
                     description,
                     status,
                     category,
                  })
               )
            }
         >
            <button className='edit-btn btn'>Edit Feedback</button>
         </Link>
      </FeedbackDetailNavWrap>
   );
};

export default FeedbackDetailNav;

const FeedbackDetailNavWrap = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`;
