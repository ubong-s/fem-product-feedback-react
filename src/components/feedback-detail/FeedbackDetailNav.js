import styled from 'styled-components';
import { BackBtn } from '../shared';

const FeedbackDetailNav = () => {
   return (
      <FeedbackDetailNavWrap>
         <BackBtn />
         <button className='edit-btn btn'>Edit Feedback</button>
      </FeedbackDetailNavWrap>
   );
};

export default FeedbackDetailNav;

const FeedbackDetailNavWrap = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`;
