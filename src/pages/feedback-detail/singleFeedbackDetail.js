import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// styles
import styled from 'styled-components';
import { breakpoints, misc } from '../../styles';

// components
import {
   FeedbackDetailNav,
   FeedbackHeader,
   FeedbackComments,
   AddComment,
} from '../../components/feedback-detail';

const SingleFeedbackDetail = () => {
   const { id } = useParams();
   const { allRequests } = useSelector((state) => state.productRequests);

   const feedback = allRequests.find((request) => request.id === Number(id));

   const { comments } = feedback;

   return (
      <SingleFeedbackDetailWrap className='container'>
         <FeedbackDetailNav />
         <FeedbackHeader {...feedback} />
         <FeedbackComments comments={comments} />
         <AddComment />
      </SingleFeedbackDetailWrap>
   );
};

export default SingleFeedbackDetail;

const SingleFeedbackDetailWrap = styled.main`
   display: grid;
   gap: 1.5rem;
   padding: 2rem 0;

   @media screen and (min-width: ${breakpoints.tablet}) {
      gap: 2rem;
      padding: 5rem 0;
   }
   @media screen and (min-width: ${breakpoints.desktop}) {
      padding: 7rem 0;
   }
`;
