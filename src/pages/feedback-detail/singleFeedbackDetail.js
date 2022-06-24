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
import { Seo } from '../../components/shared';

const SingleFeedbackDetail = () => {
   const { id } = useParams();
   const { allRequests } = useSelector((state) => state.productRequests);

   const feedback = allRequests.find((request) => request.id === Number(id));

   return (
      <>
         <Seo title={feedback.title} />
         <SingleFeedbackDetailWrap className='container'>
            <FeedbackDetailNav {...feedback} />
            <FeedbackHeader {...feedback} />
            <FeedbackComments comments={feedback.comments} />
            <AddComment />
         </SingleFeedbackDetailWrap>
      </>
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
