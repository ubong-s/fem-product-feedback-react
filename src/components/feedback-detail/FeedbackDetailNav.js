import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BackBtn } from '../shared';

const FeedbackDetailNav = ({ id, title, description, status, category }) => {
   return (
      <FeedbackDetailNavWrap>
         <BackBtn />
         <Link to={`/feedback/edit-feedback/${id}`}>
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
